import os
from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO, emit
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from googletrans import Translator

class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")
app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {
    "pool_recycle": 300,
    "pool_pre_ping": True,
}
db.init_app(app)
socketio = SocketIO(app, async_mode='eventlet')

translator = Translator()

SUPPORTED_LANGUAGES = {
    'en': 'English',
    'es': 'Spanish',
    'fr': 'French',
    'de': 'German',
    'it': 'Italian',
    'ja': 'Japanese',
    'ko': 'Korean',
    'zh-cn': 'Chinese (Simplified)'
}

with app.app_context():
    db.create_all()

@app.route('/')
def index():
    return render_template('index.html', languages=SUPPORTED_LANGUAGES)

@socketio.on('host_message')
def handle_host_message(data):
    text = data['text']
    for lang_code in SUPPORTED_LANGUAGES.keys():
        if lang_code != 'en':
            translated = translator.translate(text, dest=lang_code)
            emit('translation', {'lang': lang_code, 'text': translated.text}, broadcast=True)

@socketio.on('join')
def on_join(data):
    language = data['language']
    emit('user_joined', {'language': language}, broadcast=True)

@app.route('/api/languages')
def get_languages():
    return jsonify(SUPPORTED_LANGUAGES)

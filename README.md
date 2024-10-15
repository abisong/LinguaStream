# LinguaStream

LinguaStream is a real-time translation web application built with Flask and Socket.IO.

## Pushing to GitHub

To push this project to GitHub, follow these steps:

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name your repository (e.g., "LinguaStream")
   - Choose whether to make it public or private
   - Do not initialize the repository with a README, .gitignore, or license

2. Open a terminal in your project directory and run the following commands:

   ```
   git init
   git add .
   git commit -m "Initial commit of LinguaStream app"
   git branch -M main
   git remote add origin https://github.com/yourusername/LinguaStream.git
   git push -u origin main
   ```

   Replace `yourusername` with your GitHub username and `LinguaStream` with your repository name if different.

3. Refresh your GitHub repository page, and you should see all your project files there.

## Running the Application

To run the application locally:

1. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Set up the environment variables:
   - Create a `.env` file in the project root
   - Add the following variables:
     ```
     DATABASE_URL=your_database_url
     ```

3. Run the application:
   ```
   python main.py
   ```

4. Open a web browser and navigate to `http://localhost:5000`

Enjoy using LinguaStream!

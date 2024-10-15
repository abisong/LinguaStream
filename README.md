# LinguaStream

LinguaStream is a real-time translation web application built with Flask and Socket.IO.

## Pushing to GitHub

To push this project to GitHub, follow these steps:

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name your repository (e.g., "LinguaStream")
   - Choose whether to make it public or private
   - Do not initialize the repository with a README, .gitignore, or license
   - Click "Create repository"

2. Copy the URL of your new repository. It should look like:
   `https://github.com/yourusername/LinguaStream.git`

3. In your terminal, update the remote URL with your new GitHub repository:
   ```
   git remote set-url origin https://github.com/yourusername/LinguaStream.git
   ```
   Replace `yourusername` with your GitHub username and `LinguaStream` with your repository name if different.

4. Push your code to GitHub:
   ```
   git push -u origin main
   ```

5. Refresh your GitHub repository page, and you should see all your project files there.

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

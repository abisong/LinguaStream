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

2. Set up a personal access token (PAT):
   - Go to https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Give it a name (e.g., "LinguaStream Access Token")
   - Select the "repo" scope
   - Click "Generate token"
   - Copy the token (you won't be able to see it again)

3. In your terminal, update the remote URL with your new GitHub repository:
   ```
   git remote set-url origin https://github.com/yourusername/LinguaStream.git
   ```
   Replace `yourusername` with your GitHub username and `LinguaStream` with your repository name if different.

4. Set up your Git credentials:
   ```
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

5. Push your code to GitHub:
   ```
   git push -u origin main
   ```
   When prompted for a password, use the personal access token you created in step 2.

6. Refresh your GitHub repository page, and you should see all your project files there.

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

## Note on GitHub Authentication

GitHub no longer supports password authentication for HTTPS Git operations. You must use a personal access token (PAT) instead of your password when pushing to GitHub. This is why we created a PAT in step 2 of the "Pushing to GitHub" instructions.

When you use the `git push` command, you'll be prompted for your username and password. Enter your GitHub username as usual, but instead of your GitHub password, paste the personal access token you generated.

If you're having trouble with authentication, make sure you're using the PAT correctly and that it has the necessary permissions (the "repo" scope should be sufficient for this project).

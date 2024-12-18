# Use the official Python base image
FROM python:3.11-slim

# Set the working directory
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

# Copy the application code into the container
COPY . .

# Expose the application port (e.g., Flask default port 5000)
EXPOSE 5000

# Command to run the application
CMD ["python", "app.py"]

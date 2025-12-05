FROM python:3.9

# Set working directory
WORKDIR /app

# Set shell for pipefail (DL4006)
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Copy app code first (for layer caching)
COPY . .

# Install system dependencies securely
RUN apt-get update \
    && apt-get install --no-install-recommends -y \
       curl \
       gnupg \
       unixodbc \
       unixodbc-dev \
    && rm -rf /var/lib/apt/lists/*  # DL3009

# Add Microsoft SQL repository
RUN curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > /etc/apt/trusted.gpg.d/microsoft.gpg \
    && curl https://packages.microsoft.com/config/debian/10/prod.list > /etc/apt/sources.list.d/mssql-release.list

# Update and install SQL Server ODBC driver
RUN apt-get update \
    && ACCEPT_EULA=Y apt-get install --no-install-recommends -y msodbcsql17 \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose FastAPI port
EXPOSE 8000

# Start FastAPI
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]

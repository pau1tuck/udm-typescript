cd /app/udm-web
docker build -t udm-web .
docker run -p 3000:3000 -v $(pwd):/app/udm-web udm-web
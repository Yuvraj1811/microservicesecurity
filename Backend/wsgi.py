# backend/app/wsgi.py  (Django) or create in Flask entrypoint
from contrast.agent.middlewares.wsgi_middleware import WSGIMiddleware
from django.core.wsgi import get_wsgi_application

app = get_wsgi_application()
# Wrap the app for IAST
app = WSGIMiddleware(app)

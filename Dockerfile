FROM arm64v8/python:3.11-bullseye

ENV POETRY_VERSION=1.1.6

RUN apt-get update && apt-get install -y \
    sudo \
    curl \
    libpq-dev \
    libcurl4-openssl-dev \
    libssl-dev \
    libxml2-dev \
    netcat

RUN pip install "poetry==$POETRY_VERSION"
RUN mkdir /app
COPY poetry.lock pyproject.toml /app/
WORKDIR /app

RUN poetry export --without-hashes --no-ansi -f requirements.txt -o requirements.txt
RUN pip install setuptools
RUN pip install -r requirements.txt
RUN pip install gunicorn==20.1.0

COPY . .
COPY ./start.sh /start.sh
RUN chmod +x /start.sh
COPY ./gunicorn_conf.py /gunicorn_conf.py

ENV PYTHONPATH=/app

EXPOSE 85

CMD ["/start.sh"]

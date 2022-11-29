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

COPY . .
COPY ./start.py /start.py
RUN chmod +x /start.py

ENV PYTHONPATH=/app

EXPOSE 8000

CMD ["/start.sh"]

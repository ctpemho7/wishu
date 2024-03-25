# syntax=docker/dockerfile:1.4
FROM python:3.10-slim

ENV ENV=${ENV} \
  PYTHONFAULTHANDLER=1 \
  PYTHONUNBUFFERED=1 \
  PYTHONPATH=/src/ \
  # Disable pip cache to make docker image smaller
  PIP_NO_CACHE_DIR=1 \
  # Disable pip version check
  PIP_DISABLE_PIP_VERSION_CHECK=1

COPY ./requirements.txt /

RUN pip install -r requirements.txt

ADD ./src /src
ADD ./static /static
ADD ./media /media

WORKDIR /src

USER root
# syntax=docker/dockerfile:1
ARG PLONE_VERSION=6.0.14
FROM plone/server-builder:${PLONE_VERSION} AS builder

WORKDIR /app


# Add local code
COPY scripts/ scripts/
COPY . src

# Install local requirements and pre-compile mo files
RUN <<EOT
    set -e
    bin/pip install mxdev uv hatch
    cd /app/src
    ../bin/hatch build
    make constraints-mxdev.txt
    ../bin/uv pip install dist/*.whl -c constraints-mxdev.txt
    ../bin/python /compile_mo.py
    cd /app
    rm -Rf /app/src
EOT

FROM plone/server-prod-config:${PLONE_VERSION}

LABEL maintainer="PloneGov-BR <gov@plone.org.br>" \
      org.label-schema.name="portalbrasil-intranet-backend" \
      org.label-schema.description="PortalBrasil: Intranet backend image." \
      org.label-schema.vendor="PloneGov-BR"

ENV ALLOWED_DISTRIBUTIONS=portalbrasil-intranet

# Copy /app from builder
COPY --from=builder /app /app

RUN <<EOT
    set -e
    ln -s /data /app/var
EOT

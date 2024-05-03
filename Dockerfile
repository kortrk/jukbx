# syntax=docker/dockerfile:1

FROM ruby:3.0

# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

WORKDIR /app

# Ruby Gems
# COPY Gemfile Gemfile.lock ./
# RUN bundle install

# AWS CLI
RUN apt update && apt install -y curl unzip groff
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
	./aws/install

# Terraform
RUN apt update \
    && apt install -y wget \
    && apt install -y unzip \
    && apt install -y vim \
    && apt install -y openssh-client
# Download the latest version of Terraform from the official website
RUN wget https://releases.hashicorp.com/terraform/1.8.2/terraform_1.8.2_linux_amd64.zip
# Unzip the downloaded file:
RUN unzip terraform_1.8.2_linux_amd64.zip
# Move the terraform binary to a directory in your system's PATH.
RUN mv terraform /usr/local/bin/
# Verify that Terraform is installed by checking its version:
RUN terraform version

### Don't forget to set your git username

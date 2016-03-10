#!/usr/bin/env make -rRf

APP_NAME := yourwave radio
export NODE_ENV=config

all: run

compile:
	@echo "[ Compile react js ]"
	@babel --presets react src --out-dir public
	@echo "[ End ]"

run:
	@echo "[ Run app... ]"
	@DEBUG=radio:* npm start

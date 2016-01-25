#!/usr/bin/env make -rRf

APP_NAME := yourwave radio

all: compile
	@echo "[ Run app... ]"
	@export NODE_ENV=config
	@node index.js

compile:
	@echo "[ Compile react js ]"
	@babel --presets react src --out-dir public
	@echo "[ End ]"

run:
	@echo "[ Run app... ]"
	@export NODE_ENV=config
	@node index.js

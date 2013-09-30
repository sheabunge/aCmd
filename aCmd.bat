@echo off
title Another Command Prompt
color 0F
echo Another Command Prompt
echo Copyright (c) 2011 Shea Bunge (http://bungeshea.com)
:start
echo.
echo CD: %cd%
echo.
@echo on
@set /p acmd=
%acmd%
@echo off
goto start

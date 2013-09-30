@echo off
title Another Command Prompt
color 0F
echo Another Command Prompt
echo Copyright (c) 2011 Shea Bunge (http://bungeshea.com)
if exist user.bat call user.bat
:start
echo.
@echo on
@set /p acmd=%cd%)
@%acmd%
@echo off
goto start

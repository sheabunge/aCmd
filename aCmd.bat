@echo off
title Another Command Prompt
echo Another Command Prompt
echo Copyright (c) 2011 Shea Bunge (http://bungeshea.com)
:start
echo.
set /p cmd=
@echo on
%cmd%
@echo off
goto start

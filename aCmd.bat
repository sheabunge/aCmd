@title Another Command Prompt
@echo Another Command Prompt 0.4
@echo (http://acmd.bungeshea.com)
@if exist user.bat @call user.bat
@if exist "%APPDATA%\user.bat" @call "%APPDATA%\user.bat"
:chkargs
@set args=0
@if [%1] NEQ [] set args=1
@if %args% == 0 goto start
@echo.
@echo %cd%^>%1
@%1 2>&1
@shift
@goto chkargs
:start
@echo.
@set /p acmd=%cd%^>
@%acmd% 2>&1
@goto start

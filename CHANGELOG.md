# Changelog

## 0.4
_Released on 2012-05-26_

* In this version command line parameters (arguments) are now supported.
* After checking in the current directory for `user.bat`, aCmd will then load `%APPDATA%\user.bat` if it exists. This is useful if you do not have the permissions to write to the directory where aCmd is stored.
* Also fixes a bug with file versions - please ignore all incorrect file versions shown on the executables less then version 0.4.

## 0.3
_Released on 2012-11-17_

* The current directory is now echoed just before the input, like Windows Command Prompt.
* This is the first version to be distributed online.
* Custom commands can be loaded at startup by placing a file called user.bat into the same directory as aCmd.

## 0.2
_Released on 2012-09-23_

* Now it has an icon an is compiled into an executable.
* The current directory is echoed above the input.

## 0.1
_Released in 2011_

* Initial release.
* Functional, but doesn't look much like the Windows Command Prompt.

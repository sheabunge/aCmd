Another Command Prompt version 0.4
==================================

Thank-you for downloading Another Command Prompt (aCmd). For more information about aCmd, please visit <http://acmd.sourceforge.net>.

## Instructions for use

Double click on `aCmd.exe` to start. Simply type a command, just like Windows Command Prompt.

## Customizing aCmd

To add additional settings to aCmd, create a file called user.bat (in the same directory an aCmd.exe), which will load on startup
You could add these settings to user.bat:

	cd\
	color 0E
	title My Command Prompt
	cls

This would set the start directory to the root of the drive, change the color to yellow text on a white background, change the title to 'My Command Prompt' and remove the welcome message, respectively.

After checking in the current directory for `user.bat`, aCmd will then load `%APPDATA%\user.bat` if it exists. This is useful if you do not have the permissions to write to the directory where aCmd is stored.


## About Another Command Prompt

Another Command Prompt was written in Batch, designed to allow users to use command prompt even when it is blocked by an administrator.

Another Command Prompt (aCmd) is open-source and freeware.

Created by Shea Bunge

* **Website:**	<http://bungeshea.users.sourceforge.net>
* **E-mail:**		<bungeshea@users.sourceforge.net>

## Troubleshooting

aCmd will not work on non-Windows computers or Windows PCs that block executable (.exe) files.

## Changelog

### 0.4
__Released on 26<sup>th</sup> May 2012__

* In this version command line parameters (arguments) are now supported.
* After checking in the current directory for user.bat aCmd will then load %APPDATA%\user.bat if it exists. This is useful if you do not have the permissions to write to the directory where aCmd is stored.
* Also fixes a bug with file versions - please ignore all incorrect file versions shown on the executables less then version 0.4.

### 0.3
__Released on 17<sup>th</sup> November 2012__

* The current directory is now echoed just before the input, like Windows Command Prompt.
* This is the first version to be distributed on the Another Command Prompt website (acmd.sourceforge.net).
* Custom commands can be loaded at startup by placing a file called user.bat into the same directory as aCmd.

### 0.2
__Released on 23<sup>rd</sup> September 2012__

* Now it has an icon an is compiled into an executable.
* The current directory is echoed above the input.

### 0.1
__Released in 2011__

* Initial release.
* Functional, but doesn't look much like the Windows Command Prompt.

# Another Command Prompt

Another Command Prompt (aCmd) is an emulation of the Windows Command Prompt written entirely in batch. It is intended to be a full-featured command prompt alternative to be used when the default Windows Command Prompt is blocked by an administrator, as it is on many restricted computers at schools and workplaces.

## Usage

1. Download the latest build of aCmd from the [releases page](https://github.com/bungeshea/aCmd/releases).
2. Double click on `aCmd.exe` to start.
3. Simply type a command, just like Windows Command Prompt.
4. Profit

## Customizing aCmd

To add additional settings to aCmd, create a file called `user.bat` (in the same directory an `aCmd.exe`), which will load on startup.

You could add these settings to `user.bat`:

	cd\
	color 0E
	title My Command Prompt
	cls

This would set the start directory to the root of the drive, change the color to yellow text on a white background, change the title to 'My Command Prompt' and remove the welcome message, respectively.

After checking in the current directory for `user.bat`, aCmd will then attempt to load `%APPDATA%\user.bat` if it exists. This is useful if you do not have the permissions to write to the directory where aCmd is stored.

## Troubleshooting

aCmd will not work on non-Windows computers or Windows PCs that block executable (.exe) files or batch script execution. Sorry.

## Changelog

### 0.4
_Released on 2012-05-26_

* In this version command line parameters (arguments) are now supported.
* After checking in the current directory for `user.bat`, aCmd will then load `%APPDATA%\user.bat` if it exists. This is useful if you do not have the permissions to write to the directory where aCmd is stored.
* Also fixes a bug with file versions - please ignore all incorrect file versions shown on the executables less then version 0.4.

### 0.3
_Released on 2012-11-17_

* The current directory is now echoed just before the input, like Windows Command Prompt.
* This is the first version to be distributed on the [Another Command Prompt website](http://acmd.sourceforge.net).
* Custom commands can be loaded at startup by placing a file called user.bat into the same directory as aCmd.

### 0.2
_Released on 2012-09-23_

* Now it has an icon an is compiled into an executable.
* The current directory is echoed above the input.

### 0.1
_Released in 2011_

* Initial release.
* Functional, but doesn't look much like the Windows Command Prompt.

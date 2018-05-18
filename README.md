# Another Command Prompt

Another Command Prompt (aCmd) is an emulation of the Windows Command Prompt written entirely in batch.

It is intended to be a full-featured command prompt alternative to be used when the default Windows Command Prompt is blocked by an administrator, as it is on many restricted computers at schools and workplaces.

For more information, take a look at the [project website](https://acmd.bungeshea.com).

## Usage

1. Download the latest build of aCmd from the [releases page](https://github.com/sheabunge/aCmd/releases).
2. Double click on `aCmd.exe` to start.
3. Simply type a command, just like Windows Command Prompt.
4. ???
5. Profit

## Customising aCmd

To add additional settings to aCmd, create a file called `user.bat` in the same directory as `aCmd.exe`, which will load on startup.

For example, you could add these settings to `user.bat`:

	cd \
	color 0E
	title My Command Prompt
	cls

This would set the start directory to the root of the drive, change the color to yellow text on a white background, change the title to "My Command Prompt" and remove the welcome message, respectively.

After checking in the current directory for user.bat, aCmd will then load `%APPDATA%\user.bat` if it exists. This is useful if you do not have  permission to write to the directory where aCmd is stored.


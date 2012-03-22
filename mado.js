var Const={};Const.FSO=new ActiveXObject("Scripting.FileSystemObject");Const.WSHELL=new ActiveXObject("WScript.Shell");Const.SHELLAPP=new ActiveXObject("Shell.Application");Const.INITIAL_CURRENT_DIRECTORY=Const.WSHELL.CurrentDirectory;Const.WINDOW_STYLE_NORMAL=1;Const.WINDOW_STYLE_MIN=2;Const.WINDOW_STYLE_MAX=3;Const.IOMODE_FORREADING=1;Const.IOMODE_FORWRITING=2;Const.IOMODE_FORAPPENDING=8;Const.LOG_EVENT_TYPE_SUCCESS=0;Const.LOG_EVENT_TYPE_ERROR=1;Const.LOG_EVENT_TYPE_WARNING=2;Const.LOG_EVENT_TYPE_INFORMATION=4;Const.LOG_EVENT_TYPE_AUDIT_SUCCESS=8;Const.LOG_EVENT_TYPE_AUDIT_FAILURE=16;Const.BUTTON_TYPE_OK_ONLY=0;Const.BUTTON_TYPE_OK_CANCEL=1;Const.BUTTON_TYPE_STOP_RETRY_IGNORE=2;Const.BUTTON_TYPE_YES_NO_CANCEL=3;Const.BUTTON_TYPE_YES_NO=4;Const.BUTTON_TYPE_RETRY_CANCEL=5;Const.ICON_TYPE_STOP=16;Const.ICON_TYPE_QUESTION=32;Const.ICON_TYPE_EXCLAMATION=48;Const.ICON_TYPE_INFO=64;Const.BUTTON_VALUE_OK=1;Const.BUTTON_VALUE_CANCEL=2;Const.BUTTON_VALUE_STOP=3;Const.BUTTON_VALUE_RETRY=4;Const.BUTTON_VALUE_IGNORE=5;Const.BUTTON_VALUE_YES=6;Const.BUTTON_VALUE_NO=7;var ARGV=[];(function(){try{var a=WScript.Arguments.length;for(var b=0;b<a;b++){ARGV.push(WScript.Arguments(b))}}catch(c){}}());try{var __FILE__=WScript.ScriptFullName}catch(e){if(e.name==="TypeError"){}else{throw e}}var sleep=function(b){try{WScript.Sleep(b)}catch(a){if(a.name==="TypeError"){}else{throw a}}};var sleepif=function(c,b,a){if(!a){a=[]}while(true){if(b.apply({},a)){return true}sleep(c)}};var print=function(b){try{WScript.Echo(b)}catch(a){if(a.name==="TypeError"){window.alert(b)}else{throw a}}};var echo=print;var exit=function(a){var b=a||0;try{WScript.Quit(b)}catch(c){if(c.name==="TypeError"){window.close()}else{throw c}}};var isFunction=function(a){return(typeof a=="function")};var getComputerName=function(){return Const.WSHELL.ExpandEnvironmentStrings("%COMPUTERNAME%")};var isWScriptRunning=function(){try{return/wscript\.exe$/i.test(WScript.FullName)}catch(a){if(a.name==="TypeError"){return false}else{throw a}}};var sendKeys=function(f,a,g){var d=a||1;var c=g||0;for(var b=0;b<d;b++){sleep(c);Const.WSHELL.Sendkeys(f)}return this};var getEnv=function(a){return Const.WSHELL.ExpandEnvironmentStrings("%"+a+"%")};var osShutdown=function(b){var a=b||0;Process.exec("shutdown",["-s","-t",a],0,false)};var osReboot=function(c,b){var d=["-r","-t"];var a=c||0;d.push(a);if(b!==null){d.push(b)}Process.exec("shutdown",d,0,false)};var createShortcut=function(c,b){var a=Const.WSHELL.CreateShortcut(c);a.TargetPath=b;a.Save()};var popup=function(f,b,i,g,d){var h=b||0;var j=i||"Windows Script Host";var c=g||Const.BUTTON_TYPE_OK_ONLY;var a=d||Const.ICON_TYPE_INFO;return Const.WSHELL.popup(f,h,j,c+a)};try{var objJS=new ActiveXObject("ScriptControl");objJS.Language="VBScript";objJS.AddCode("Function JSInputBox(prompt, title)   JSInputBox = InputBox(prompt, title) End Function")}catch(e){}var inputBox=function(a,d){var b=a||"";var c=d||"";if(objJS){return objJS.CodeObject.JSInputBox(b,c)}};var arrayToSafeArray=function(c){var d=new ActiveXObject("Scripting.Dictionary");var a=c.length;for(var b=0;b<a;b++){d.add(b,c[b])}return d.items()};var SpecialFolders={};SpecialFolders.getAllUsersDesktop=function(){return Const.WSHELL.SpecialFolders("AllUsersDesktop")};SpecialFolders.getAllUsersStartMenu=function(){return Const.WSHELL.SpecialFolders("AllUsersStartMenu")};SpecialFolders.getAllUsersPrograms=function(){return Const.WSHELL.SpecialFolders("AllUsersPrograms")};SpecialFolders.getAllUsersStartup=function(){return Const.WSHELL.SpecialFolders("AllUsersStartup")};SpecialFolders.getDesktop=function(){return Const.WSHELL.SpecialFolders("Desktop")};SpecialFolders.getFavorites=function(){return Const.WSHELL.SpecialFolders("Favorites")};SpecialFolders.getFonts=function(){return Const.WSHELL.SpecialFolders("Fonts")};SpecialFolders.getMyDocuments=function(){return Const.WSHELL.SpecialFolders("MyDocuments")};SpecialFolders.getNetHood=function(){return Const.WSHELL.SpecialFolders("NetHood")};SpecialFolders.getPrintHood=function(){return Const.WSHELL.SpecialFolders("PrintHood")};SpecialFolders.getPrograms=function(){return Const.WSHELL.SpecialFolders("Programs")};SpecialFolders.getRecent=function(){return Const.WSHELL.SpecialFolders("Recent")};SpecialFolders.getSendTo=function(){return Const.WSHELL.SpecialFolders("SendTo")};SpecialFolders.getStartMenu=function(){return Const.WSHELL.SpecialFolders("StartMenu")};SpecialFolders.getStartup=function(){return Const.WSHELL.SpecialFolders("Startup")};SpecialFolders.getTemplates=function(){return Const.WSHELL.SpecialFolders("Templates")};Array.prototype.orgToString=Array.prototype.toString;Array.prototype.toString=function(){var a="[";var c=this.length;for(var b=0;b<c;b++){if(a!=="["){a+=", "}a+=this[b].toString()}a+="]";return a};Array.prototype.forEach=function(d){var a=[];var c=this.length;for(var b=0;b<c;b++){a.push(d(this[b]))}return a};Array.prototype.each=Array.prototype.forEach;Array.prototype.include=function(c){var b=this.length;for(var a=0;a<b;a++){if(this[a]===c){return true}}return false};Date.prototype.getYYYYMMDD=function(){var c=this.getFullYear();var b=this.getMonth()+1;var a=this.getDate();if(b<10){b="0"+b}if(a<10){a="0"+a}return c+b+a};Date.prototype.getYYYYMMDDHH24MISS=function(){var g=this.getFullYear();var f=this.getMonth()+1;var a=this.getDate();var d=this.getHours();var b=this.getMinutes();var c=this.getSeconds();if(f<10){f="0"+f}if(a<10){a="0"+a}if(d<10){d="0"+d}if(b<10){b="0"+b}if(c<10){c="0"+c}return g+f+a+d+b+c};Date.prototype.getFormattedDate=function(){var g=this.getFullYear();var f=this.getMonth()+1;var a=this.getDate();var d=this.getHours();var b=this.getMinutes();var c=this.getSeconds();if(f<10){f="0"+f}if(a<10){a="0"+a}if(d<10){d="0"+d}if(b<10){b="0"+b}if(c<10){c="0"+c}return g+"/"+f+"/"+a+" "+d+":"+b+":"+c};Object.prototype.toString=function(){var a="{";for(e in this){if(this.hasOwnProperty(e)){if(a!=="{"){a+=", "}a+='"'+e+'": '+this[e].toString()}}a+="}";return a};String.prototype.orgToString=String.prototype.toString;String.prototype.toString=function(){return'"'+this.valueOf()+'"'};String.prototype.trim=function(){var a=this.valueOf();return(a||"").replace(/^\s+|\s+$/g,"")};String.prototype.startsWith=function(b){var a=this.valueOf();return(a.match("^"+b)===null?false:true)};String.prototype.endsWith=function(b){var a=this.valueOf();return(a.match(b+"$")===null?false:true)};String.prototype.isZenkaku=function(){var a=this.valueOf();var b=a.substring(0,1);return(escape(b).substring(0,2)==="%u")&&!b.isHankakuKana()};String.prototype.isHankakuKana=function(){var b=this.valueOf();var d=b.substring(0,1);var a=d.charCodeAt(0);return(a>=65393&&a<=65424)};String.prototype.substringb=function(b,c){var h=this.valueOf();var f=0;var k="";var j=h.length;for(var d=0;d<j;d++){var a=h.charAt(d);var g=1;if(a.isZenkaku()){g=2}if(f>=b&&(f+g)<=c){k+=a}f+=g}return k};String.prototype.lpad=function(c,d){var f=this.valueOf();if(f.length>=d){return f}var a=f;for(var b=0;b<d-f.length;b++){a=c+a}return a};var File=function(a,b){this.path=a;this.mode=b;if(this.mode==="w"){this.ts=Const.FSO.CreateTextFile(this.path)}else{if(this.mode==="a"){if(File.exist(this.path)){this.ts=Const.FSO.OpenTextFile(this.path,Const.IOMODE_FORAPPENDING)}else{this.ts=Const.FSO.CreateTextFile(this.path)}}else{this.ts=Const.FSO.OpenTextFile(this.path,Const.IOMODE_FORREADING)}}};File.PATH_SEPARATOR="\\";File.open=function(b,d,c){var a=new File(b,d);if(c){try{c(a)}finally{a.close()}}else{return a}};File.rename=function(b,a){if(Const.FSO.FolderExists(b)){Const.FSO.MoveFolder(b,a)}else{if(Const.FSO.FileExists(b)){Const.FSO.MoveFile(b,a)}else{throw new Error(-1,"File Not Found: "+b)}}};File.copy=function(b,a){if(Const.FSO.FolderExists(b)){Const.FSO.CopyFolder(b,a)}else{if(Const.FSO.FileExists(b)){Const.FSO.CopyFile(b,a)}else{throw new Error(-1,"File Not Found: "+b)}}};File.exist=function(a){if(Const.FSO.FolderExists(a)){return true}else{if(Const.FSO.FileExists(a)){return true}else{return false}}};File.unlink=function(b,a){if(!a){a=false}if(Const.FSO.FolderExists(b)){Const.FSO.DeleteFolder(b,a)}else{if(Const.FSO.FileExists(b)){Const.FSO.DeleteFile(b,a)}else{throw new Error(-1,"File Not Found: "+b)}}};File.size=function(a){if(Const.FSO.FolderExists(a)){return Const.FSO.GetFolder(a).Size}else{if(Const.FSO.FileExists(a)){return Const.FSO.GetFile(a).Size}else{throw new Error(-1,"File Not Found: "+a)}}};File.realpath=function(a,c){var b=c||Dir.getwd();Dir.chdir(b,function(d){realpath=Const.FSO.GetAbsolutePathName(a)});return realpath};File.extname=function(a){var b=Const.FSO.GetExtensionName(a);if(b===""){return b}else{return"."+b}};File.basename=function(a){var b=Const.FSO.GetFile(a);return b.Name};File.createTemporaryFile=function(b){var a=SpecialFolders.getMyDocuments()+"\\"+new Date().getYYYYMMDDHH24MISS();File.open(a,"w",function(c){b(c)});if(File.exist(a)){File.unlink(a)}};File.atime=function(a){if(Const.FSO.FileExists(a)){var b=Const.FSO.GetFile(a);return b.DateLastAccessed}else{throw new Error(-1,"File Not Found: "+path)}};File.mtime=function(a){if(Const.FSO.FileExists(a)){var b=Const.FSO.GetFile(a);return b.DateLastModified}else{throw new Error(-1,"File Not Found: "+path)}};File.ctime=function(a){if(Const.FSO.FileExists(a)){var b=Const.FSO.GetFile(a);return b.DateCreated}else{throw new Error(-1,"File Not Found: "+path)}};File.dirname=function(b){if(b==="/"){return"/"}else{if(b.indexOf("/")===-1){return"."}else{var c=b;if(b.endsWith("/")){c=c.substring(0,c.length-1)}while(true){var d=c.lastIndexOf("/");if(d===0){return"/"}else{var a=c.substring(0,d);if(a.charAt(a.length-1)!=="/"){return a}c=a}}}}};File.getShortName=function(a){if(Const.FSO.FileExists(a)){var b=Const.FSO.GetFile(a);return b.ShortName}else{throw new Error(-1,"File Not Found: "+path)}};File.prototype={each:function(a){while(!this.ts.AtEndOfStream){a(this.ts.ReadLine())}},readLine:function(){return this.ts.ReadLine()},puts:function(a){this.ts.WriteLine(a)},write:function(a){this.ts.Write(a)},close:function(){this.ts.Close()},getPath:function(){return this.path},atime:function(){return File.atime(this.getPath())},mtime:function(){return File.mtime(this.getPath())},ctime:function(){return File.ctime(this.getPath())},getShortName:function(){return File.getShortName(this.getPath())}};var Dir=function(a){if(!Dir.exist(a)){throw new Error(a+" not found or is not directory.")}this.path=a};Dir.getwd=function(){return Const.WSHELL.CurrentDirectory};Dir.pwd=Dir.getwd;Dir.chdir=function(b,c){if(!b){b=Const.INITIAL_CURRENT_DIRECTORY}else{if(!File.exist(b)){throw new Error(-1,"Path Not Found: "+b)}}if(c){var a=Dir.getwd();Const.WSHELL.CurrentDirectory=b;c(b);Const.WSHELL.CurrentDirectory=a}else{Const.WSHELL.CurrentDirectory=b}};Dir.mkdir=function(a){Const.FSO.CreateFolder(a);return new Dir(a)};Dir.getParentDir=function(a){return Const.FSO.GetParentFolderName(a)};Dir.open=function(b,c){if(c){var a=new Dir(b);c(a)}else{return new Dir(b)}};Dir.exist=function(a){return Const.FSO.FolderExists(a)};Dir.entries=function(c){var b=new Dir(c);var a=[];b.each(function(d){a.push(d)});return a};Dir.find=function(f,d,g){var b=new Dir(f);var a=[];var c=function(h){if(d===undefined||h.match(d)){if(isFunction(g)){g(h)}else{a.push(h)}}};b.each(function(l){if(Dir.exist(l)){var h=Dir.find(l,d,g);var j=h.length;for(var k=0;k<j;k++){c(h[k])}}else{c(l)}});return a};Dir.prototype={getParentDir:function(){return Dir.getParentDir(this.path)},each:function(d){var c=Const.FSO.GetFolder(this.path);var b=new Enumerator(c.SubFolders);for(;!b.atEnd();b.moveNext()){d(b.item().Path)}var a=new Enumerator(c.Files);for(;!a.atEnd();a.moveNext()){d(a.item().Path)}}};var Drive=function(a){if(!Drive.exist(a)){throw new Error("Drive "+a+" not found.")}this.path=a;this.driveObj=Const.FSO.GetDrive(a)};Drive.DRIVE_TYPE_UNKNOWN=0;Drive.DRIVE_TYPE_REMOVABLE_DISK=1;Drive.DRIVE_TYPE_HARD_DISK=2;Drive.DRIVE_TYPE_NETWORK_DRIVE=3;Drive.DRIVE_TYPE_CDROM=4;Drive.DRIVE_TYPE_RAM_DISK=5;Drive.getDrives=function(){var a=[];var b=new Enumerator(Const.FSO.Drives);for(;!b.atEnd();b.moveNext()){a.push(new Drive(b.item().Path))}return a};Drive.exist=function(a){return Const.FSO.DriveExists(a)};Drive.prototype={getAvailableSpace:function(){return this.driveObj.AvailableSpace},getDriveLetter:function(){return this.driveObj.DriveLetter},getDriveType:function(){return this.driveObj.DriveType},getFreeSpace:function(){return this.driveObj.FreeSpace},getFileSystem:function(){return this.driveObj.FileSystem},isReady:function(){return this.driveObj.IsReady},getSerialNumber:function(){return this.driveObj.IsReady},getShareName:function(){return this.driveObj.ShareName},getTotalSize:function(){return this.driveObj.TotalSize},getVolumeName:function(){return this.driveObj.VolumeName}};var HTTP=function(b,a){this.host=b;this.port=a||DEFAULT_PORT_NUMBER};HTTP.DEFAULT_PORT_NUMBER=80;HTTP.start=function(c,a,d){var b=new HTTP(c,a);if(d){d(b)}else{return b}};HTTP.get=function(a,f,c){var b=c||DEFAULT_PORT_NUMBER;var d=new HTTP(a,c);return d.get(f)};HTTP.get_print=function(a,c,b){print(HTTP.get(a,c,b))};HTTP.prototype={get:function(a,c,b){return this.request("GET",a,c,"",b)},post:function(b,d,a,c){return this.request("POST",b,d,a,c)},request:function(i,c,h,a,f){var b=h||[];var d=new ActiveXObject("Microsoft.XMLHTTP");d.open(i,"http://"+this.host+":"+this.port+c,false);for(var g in b){d.setRequestHeader(g,b[g])}d.send(a);if(d.readyState===4){if(d.status===200){if(isFunction(f)){f(d.responseText)}else{return d.responseText}}else{throw new Error(d.statusText)}}}};var FTP={};FTP.MODE_ASCII=1;FTP.MODE_BINARY=2;FTP.get=function(c,b,a,f,d,g){File.createTemporaryFile(function(h){h.puts("open "+c);h.puts(b);h.puts(a);h.puts("cd "+d);if(f===FTP.MODE_ASCII){h.puts("ascii")}else{h.puts("binary")}h.puts("get "+g);h.puts("bye");Process.exec("ftp",['-s:"'+h.getPath()+'"'],Const.WINDOW_STYLE_MIN,true)})};FTP.put=function(c,b,a,f,d,g){File.createTemporaryFile(function(h){h.puts("open "+c);h.puts(b);h.puts(a);h.puts("cd "+d);if(f===FTP.MODE_ASCII){h.puts("ascii")}else{h.puts("binary")}h.puts("put "+g);h.puts("bye");Process.exec("ftp",['-s:"'+h.getPath()+'"'],Const.WINDOW_STYLE_MIN,true)})};var ClipboardIE=function(){this._ie=new ActiveXObject("InternetExplorer.Application");this._ie.navigate("about:blank");while(this._ie.Busy){sleep(10)}this._ie.Visible=false;this._textarea=this._ie.document.createElement("textarea");this._ie.document.body.appendChild(this._textarea);this._textarea.focus();this._closed=false};ClipboardIE.prototype={set:function(a){if(this._closed){return}this._textarea.innerText=a;this._ie.execWB(17,0);this._ie.execWB(12,0)},get:function(){if(this._closed){return}this._textarea.innerText="";this._ie.execWB(13,0);return this._textarea.innerText},close:function(){this._ie.Quit();this._closed=true}};var ClipboardExcel=function(){this.excel=Excel.create();this.sheet=this.excel.getSheetByIndex(0);this.sheet.setFormat(1,1,"@")};ClipboardExcel.prototype={set:function(a){this.sheet.setValue(1,1,a);this.sheet.copy(1,1)},get:function(){return this.sheet.getValue(1,1)},close:function(){this.excel.quitDiscardChanges()}};var Clipboard=function(){if(Excel.available()){this.clip=new ClipboardExcel()}else{this.clip=new ClipboardIE()}};Clipboard.open=function(b){if(!isFunction(b)){return new Clipboard()}try{var a=new Clipboard();b(a)}finally{if(a){a.close()}}};Clipboard.prototype={set:function(a){this.clip.set(a)},get:function(){return this.clip.get()},close:function(){this.clip.close()}};var AdoConnection=function(c,b,a){this.con=new ActiveXObject("ADODB.Connection");this.con.Open(c,b,a)};AdoConnection.AD_SCHEMA_TABLES=20;AdoConnection.AD_DATATYPE_ARRAY=8192;AdoConnection.AD_DATATYPE_BIGINT=20;AdoConnection.AD_DATATYPE_BINARY=128;AdoConnection.AD_DATATYPE_BOOLEAN=11;AdoConnection.AD_DATATYPE_BSTR=8;AdoConnection.AD_DATATYPE_CHAPTER=136;AdoConnection.AD_DATATYPE_CHAR=129;AdoConnection.AD_DATATYPE_CURRENCY=6;AdoConnection.AD_DATATYPE_DATE=7;AdoConnection.AD_DATATYPE_DBDATE=133;AdoConnection.AD_DATATYPE_DBTIME=134;AdoConnection.AD_DATATYPE_DBTIMESTAMP=135;AdoConnection.AD_DATATYPE_DECIMAL=14;AdoConnection.AD_DATATYPE_DOUBLE=5;AdoConnection.AD_DATATYPE_EMPTY=0;AdoConnection.AD_DATATYPE_ERROR=10;AdoConnection.AD_DATATYPE_FILETIME=64;AdoConnection.AD_DATATYPE_GUID=72;AdoConnection.AD_DATATYPE_IDISPATCH=9;AdoConnection.AD_DATATYPE_INTEGER=3;AdoConnection.AD_DATATYPE_IUNKNOWN=13;AdoConnection.AD_DATATYPE_LONGVARBINARY=205;AdoConnection.AD_DATATYPE_LONGVARCHAR=201;AdoConnection.AD_DATATYPE_LONGVARWCHAR=203;AdoConnection.AD_DATATYPE_NUMERIC=131;AdoConnection.AD_DATATYPE_PROPVARIANT=138;AdoConnection.AD_DATATYPE_SINGLE=4;AdoConnection.AD_DATATYPE_SMALLINT=2;AdoConnection.AD_DATATYPE_TINYINT=16;AdoConnection.AD_DATATYPE_UNSIGNEDBIGINT=21;AdoConnection.AD_DATATYPE_UNSIGNEDINT=19;AdoConnection.AD_DATATYPE_UNSIGNEDSMALLINT=18;AdoConnection.AD_DATATYPE_UNSIGNEDTINYINT=17;AdoConnection.AD_DATATYPE_USERDEFINED=132;AdoConnection.AD_DATATYPE_VARBINARY=204;AdoConnection.AD_DATATYPE_VARCHAR=200;AdoConnection.AD_DATATYPE_VARIANT=12;AdoConnection.AD_DATATYPE_VARNUMERIC=139;AdoConnection.AD_DATATYPE_VARWCHAR=202;AdoConnection.AD_DATATYPE_WCHAR=130;AdoConnection.open=function(f,c,b,d){if(!isFunction(d)){return new AdoConnection(f,c,b)}try{var a=new AdoConnection(f,c,b);d(a)}finally{if(a){a.close()}}};AdoConnection.prototype={getRawConnection:function(){return this.con},getConnectionString:function(){return this.con.ConnectionString},executeQuery:function(c){try{var a=this.con.Execute(c);return this.convertToArrayRs(a)}catch(b){throw b}finally{if(a){a.Close()}}},executeUpdate:function(a){this.con.Execute(a)},convertToArrayRs:function(c){var d=new Enumerator(c.Fields);var a=[];while(!c.EOF){var b={};for(d.moveFirst();!d.atEnd();d.moveNext()){var f=d.item();b[f.Name]=f.Value}a.push(b);c.MoveNext()}return a},createCommand:function(a){return new AdoCommand(this,a)},close:function(){this.con.Close()},beginTrans:function(){return this.con.BeginTrans()},commitTrans:function(){this.con.CommitTrans()},rollbackTrans:function(){this.con.RollbackTrans()},getTableNames:function(c){var b=this.con.OpenSchema(AdoConnection.AD_SCHEMA_TABLES,arrayToSafeArray([undefined,c,undefined,"TABLE"]));var d=this.convertToArrayRs(b);var a=[];d.each(function(f){a.push(f.TABLE_NAME)});return a},getFieldNames:function(c){var b=this.con.Execute("SELECT * FROM "+c);var d=new Enumerator(b.Fields);var a=[];for(d.moveFirst();!d.atEnd();d.moveNext()){a.push(d.item().Name)}return a},getFieldInfo:function(c){var b=this.con.Execute("SELECT * FROM "+c);var d=new Enumerator(b.Fields);var a=[];for(d.moveFirst();!d.atEnd();d.moveNext()){var f=d.item();a.push({Name:f.Name,Type:f.Type})}return a}};var AdoCommand=function(a,b){this.con=a;this.sql=b;this.params=[];this.command=new ActiveXObject("ADODB.Command");this.command.CommandText=this.sql;this.command.CommandType=AdoCommand.COMMAND_TYPE_CMD_TEXT;this.command.ActiveConnection=this.con.getRawConnection()};AdoCommand.COMMAND_TYPE_CMD_TEXT=1;AdoCommand.DATA_TYPE_BOOLEAN=11;AdoCommand.DATA_TYPE_CHAR=129;AdoCommand.DATA_TYPE_DBDATE=133;AdoCommand.DATA_TYPE_DBTIME=134;AdoCommand.DATA_TYPE_DBTIMESTAMP=135;AdoCommand.DATA_TYPE_DECIMAL=14;AdoCommand.DATA_TYPE_DOUBLE=5;AdoCommand.DATA_TYPE_INTEGER=3;AdoCommand.DATA_TYPE_NUMERIC=131;AdoCommand.DATA_TYPE_SINGLE=4;AdoCommand.PARAMETER_DIRECTION_INPUT=1;AdoCommand.prototype={executeQuery:function(d,c){try{this.prepareParameter();var a=this.command.Execute();return this.con.convertToArrayRs(a)}catch(b){throw b}finally{if(a){a.Close()}}},executeUpdate:function(b,a){this.prepareParameter();this.command.Execute()},prepareParameter:function(){var a=this.command;this.params.each(function(c){var b=a.CreateParameter(c.Name,c.Type,c.Direction,c.Size,c.Value);a.Parameters.Append(b)})},setBooleanParameter:function(a,b){this.params.push({Name:a,Type:AdoCommand.DATA_TYPE_BOOLEAN,Direction:AdoCommand.PARAMETER_DIRECTION_INPUT,Size:-1,Value:b})},setStringParameter:function(a,b){this.params.push({Name:a,Type:AdoCommand.DATA_TYPE_CHAR,Direction:AdoCommand.PARAMETER_DIRECTION_INPUT,Size:-1,Value:b})},setDateParameter:function(a,b){this.params.push({Name:a,Type:AdoCommand.DATA_TYPE_DBDATE,Direction:AdoCommand.PARAMETER_DIRECTION_INPUT,Size:-1,Value:b})},setTimeParameter:function(a,b){this.params.push({Name:a,Type:AdoCommand.DATA_TYPE_DBTIME,Direction:AdoCommand.PARAMETER_DIRECTION_INPUT,Size:-1,Value:b})},setTimestampParameter:function(a,b){this.params.push({Name:a,Type:AdoCommand.DATA_TYPE_DBTIMESTAMP,Direction:AdoCommand.PARAMETER_DIRECTION_INPUT,Size:-1,Value:b})},setDecimalParameter:function(a,b){this.params.push({Name:a,Type:AdoCommand.DATA_TYPE_DECIMAL,Direction:AdoCommand.PARAMETER_DIRECTION_INPUT,Size:-1,Value:b})},setDoubleParameter:function(a,b){this.params.push({Name:a,Type:AdoCommand.DATA_TYPE_DOUBLE,Direction:AdoCommand.PARAMETER_DIRECTION_INPUT,Size:-1,Value:b})},setIntegerParameter:function(a,b){this.params.push({Name:a,Type:AdoCommand.DATA_TYPE_INTEGER,Direction:AdoCommand.PARAMETER_DIRECTION_INPUT,Size:-1,Value:b})},setNumericParameter:function(a,b){this.params.push({Name:a,Type:AdoCommand.DATA_TYPE_NUMERIC,Direction:AdoCommand.PARAMETER_DIRECTION_INPUT,Size:-1,Value:b})},setSingleParameter:function(a,b){this.params.push({Name:a,Type:AdoCommand.DATA_TYPE_SINGLE,Direction:AdoCommand.PARAMETER_DIRECTION_INPUT,Size:-1,Value:b})}};var AdoAccessConnection=function(c,b,a){var d="Provider=Microsoft.Jet.OLEDB.4.0;Data Source="+c;this.con=new AdoConnection(d,b,a).getRawConnection()};AdoAccessConnection.open=function(d,c,b,f){if(!isFunction(f)){return new AdoAccessConnection(d,c,b)}try{var a=new AdoAccessConnection(d,c,b);f(a)}finally{if(a){a.close()}}};AdoAccessConnection.prototype=AdoConnection.prototype;var AdoOracleConnection=function(d,b,a){var c="Provider=MSDAORA;Data Source="+d+";";this.con=new AdoConnection(c,b,a).getRawConnection()};AdoOracleConnection.open=function(f,c,b,d){if(!isFunction(d)){return new AdoOracleConnection(f,c,b)}try{var a=new AdoOracleConnection(f,c,b);d(a)}finally{if(a){a.close()}}};AdoOracleConnection.prototype=AdoConnection.prototype;var AdoOdbcConnection=function(d,b,a){var c="Provider=MSDASQL;DSN="+d+";";this.con=new AdoConnection(c,b,a).getRawConnection()};AdoOdbcConnection.open=function(f,c,b,d){if(!isFunction(d)){return new AdoOdbcConnection(f,c,b)}try{var a=new AdoOdbcConnection(f,c,b);d(a)}finally{if(a){a.close()}}};AdoOdbcConnection.prototype=AdoConnection.prototype;var KeySender=function(a,b){this.myDuration=b||0;Const.WSHELL.AppActivate(a);sleep(KeySender.DURATION)};KeySender.DURATION=10;KeySender.prototype={sendKeys:function(b,a){sendKeys(b,a,this.myDuration);return this},sendJapaneseKeys:function(c,a){var b=a||1;Clipboard.open(function(f){for(var d=0;d<b;d++){f.set(c);sendKeys("^v",1,this.myDuration)}});return this},sendKeyWithShift:function(b,a){sendKeys("+"+b,a,this.myDuration);return this},sendKeyWithControl:function(b,a){sendKeys("^"+b,a,this.myDuration);return this},sendKeyWithAlt:function(b,a){sendKeys("%"+b,a,this.myDuration);return this},sendBackspace:function(b,a){sendKeys("{BACKSPACE}",a,this.myDuration);return this},sendBreak:function(b,a){sendKeys("{BREAK}",a,this.myDuration);return this},sendCapsLock:function(b,a){sendKeys("{CAPSLOCK}",a,this.myDuration);return this},sendDelete:function(b,a){sendKeys("{DELETE}",a,this.myDuration);return this},sendDownArrow:function(b,a){sendKeys("{DOWN}",a,this.myDuration);return this},sendEnd:function(b,a){sendKeys("{END}",a,this.myDuration);return this},sendEnter:function(a){sendKeys("{ENTER}",a,this.myDuration);return this},sendEsc:function(a){sendKeys("{ESC}",a,this.myDuration);return this},sendHelp:function(a){sendKeys("{HELP}",a,this.myDuration);return this},sendHome:function(a){sendKeys("{HOME}",a,this.myDuration);return this},sendInsert:function(a){sendKeys("{INSERT}",a,this.myDuration);return this},sendLeftArrow:function(a){sendKeys("{LEFT}",a,this.myDuration);return this},sendNumLock:function(a){sendKeys("{NUMLOCK}",a,this.myDuration);return this},sendPageDown:function(a){sendKeys("{PGDN}",a,this.myDuration);return this},sendPageUp:function(a){sendKeys("{PGUP}",a,this.myDuration);return this},sendPrintScreen:function(a){sendKeys("{PRTSC}",a,this.myDuration);return this},sendRightArrow:function(a){sendKeys("{RIGHT}",a,this.myDuration);return this},sendScrollLock:function(a){sendKeys("{SCROLLLOCK}",a,this.myDuration);return this},sendTab:function(a){sendKeys("{TAB}",a,this.myDuration);return this},sendUpArrow:function(a){sendKeys("{UP}",a,this.myDuration);return this},sendF1:function(a){sendKeys("{F1}",a,this.myDuration);return this},sendF2:function(a){sendKeys("{F2}",a,this.myDuration);return this},sendF3:function(a){sendKeys("{F3}",a,this.myDuration);return this},sendF4:function(a){sendKeys("{F4}",a,this.myDuration);return this},sendF5:function(a){sendKeys("{F5}",a,this.myDuration);return this},sendF6:function(a){sendKeys("{F6}",a,this.myDuration);return this},sendF7:function(a){sendKeys("{F7}",a,this.myDuration);return this},sendF8:function(a){sendKeys("{F8}",a,this.myDuration);return this},sendF9:function(a){sendKeys("{F9}",a,this.myDuration);return this},sendF10:function(a){sendKeys("{F10}",a,this.myDuration);return this},sendF11:function(a){sendKeys("{F11}",a,this.myDuration);return this},sendF12:function(a){sendKeys("{F12}",a,this.myDuration);return this},sendF13:function(a){sendKeys("{F13}",a,this.myDuration);return this},sendF14:function(a){sendKeys("{F14}",a,this.myDuration);return this},sendF15:function(a){sendKeys("{F15}",a,this.myDuration);return this},sendF16:function(a){sendKeys("{F16}",a,this.myDuration);return this}};var Process={};Process.exec=function(i,d,f,c){var b=d||[];var h=f||Const.WINDOW_STYLE_NORMAL;var g=c||false;var a=i+" "+b.join(" ");Const.WSHELL.Run(a,h,g)};var Registry={};Registry.REG_TYPE_REG_SZ="REG_SZ";Registry.REG_TYPE_REG_DWORD="REG_DWORD";Registry.REG_TYPE_REG_BINARY="REG_BINARY";Registry.REG_TYPE_REG_EXPAND_SZ="REG_EXPAND_SZ";Registry.regRead=function(a){return Const.WSHELL.RegRead(a)};Registry.regWrite=function(a,d,b){var c=b||Registry.REG_TYPE_REG_SZ;Const.WSHELL.RegWrite(a,d,c)};Registry.regDelete=function(a){Const.WSHELL.RegDelete(a)};var Excel=function(f,b,d){this.path=f;this.excelObj=new ActiveXObject("Excel.Application");if(f===undefined){this.workbookObj=this.excelObj.Workbooks.Add()}else{if(!File.exist(f)){throw new Error(-1,"File Not Found: "+f)}switch(b){case Excel.IN_FILETYPE_CSV:case Excel.IN_FILETYPE_TSV:var a=b===Excel.IN_FILETYPE_CSV;var g=b===Excel.IN_FILETYPE_TSV;var c=Excel.array2dToSafeArray2d(d);this.excelObj.Workbooks.OpenText(f,1,1,1,1,false,g,false,a,false,false,false,c);this.workbookObj=this.excelObj.ActiveWorkbook;break;default:this.workbookObj=this.excelObj.Workbooks.Open(f)}}};Excel.FILE_FORMAT_CSV=6;Excel.FILE_FORMAT_TSV=-4158;Excel.FILE_FORMAT_EXCEL=-4143;Excel.IN_FILETYPE_TSV=1;Excel.IN_FILETYPE_SEMI_COLON=2;Excel.IN_FILETYPE_CSV=4;Excel.IN_FILETYPE_SPACE=8;Excel.IN_FILETYPE_OTHER=16;Excel.COLUMN_TYPE_GENERAL=1;Excel.COLUMN_TYPE_TEXT=2;Excel.COLUMN_TYPE_MDY=3;Excel.COLUMN_TYPE_DMY=4;Excel.COLUMN_TYPE_YMD=5;Excel.COLUMN_TYPE_MYD=6;Excel.COLUMN_TYPE_DYM=7;Excel.COLUMN_TYPE_YDM=8;Excel.COLUMN_TYPE_SKIP=9;Excel.COLUMN_TYPE_EMD=10;Excel.COLOR_INDEX_01=1;Excel.COLOR_INDEX_02=2;Excel.COLOR_INDEX_03=3;Excel.COLOR_INDEX_04=4;Excel.COLOR_INDEX_05=5;Excel.COLOR_INDEX_06=6;Excel.COLOR_INDEX_07=7;Excel.COLOR_INDEX_08=8;Excel.COLOR_INDEX_09=9;Excel.COLOR_INDEX_10=10;Excel.COLOR_INDEX_11=11;Excel.COLOR_INDEX_12=12;Excel.COLOR_INDEX_13=13;Excel.COLOR_INDEX_14=14;Excel.COLOR_INDEX_15=15;Excel.COLOR_INDEX_16=16;Excel.COLOR_INDEX_17=17;Excel.COLOR_INDEX_18=18;Excel.COLOR_INDEX_19=19;Excel.COLOR_INDEX_20=20;Excel.COLOR_INDEX_21=21;Excel.COLOR_INDEX_22=22;Excel.COLOR_INDEX_23=23;Excel.COLOR_INDEX_24=24;Excel.COLOR_INDEX_25=25;Excel.COLOR_INDEX_26=26;Excel.COLOR_INDEX_27=27;Excel.COLOR_INDEX_28=28;Excel.COLOR_INDEX_29=29;Excel.COLOR_INDEX_30=30;Excel.COLOR_INDEX_31=31;Excel.COLOR_INDEX_32=32;Excel.COLOR_INDEX_33=33;Excel.COLOR_INDEX_34=34;Excel.COLOR_INDEX_35=35;Excel.COLOR_INDEX_36=36;Excel.COLOR_INDEX_37=37;Excel.COLOR_INDEX_38=38;Excel.COLOR_INDEX_39=39;Excel.COLOR_INDEX_40=40;Excel.COLOR_INDEX_41=41;Excel.COLOR_INDEX_42=42;Excel.COLOR_INDEX_43=43;Excel.COLOR_INDEX_44=44;Excel.COLOR_INDEX_45=45;Excel.COLOR_INDEX_46=46;Excel.COLOR_INDEX_47=47;Excel.COLOR_INDEX_48=48;Excel.COLOR_INDEX_49=49;Excel.COLOR_INDEX_50=50;Excel.COLOR_INDEX_51=51;Excel.COLOR_INDEX_52=52;Excel.COLOR_INDEX_53=53;Excel.COLOR_INDEX_54=54;Excel.COLOR_INDEX_55=55;Excel.COLOR_INDEX_56=56;Excel.open=function(a,c){if(!isFunction(c)){return new Excel(a)}try{var b=new Excel(a);c(b)}finally{if(b){b.quit()}}};Excel.openReadonly=function(a,c){if(!isFunction(c)){return new Excel(a)}try{var b=new Excel(a);c(b)}finally{if(b){b.quitDiscardChanges()}}};Excel.create=function(b){if(!isFunction(b)){return new Excel()}try{var a=new Excel();b(a)}finally{if(a){a.quit()}}};Excel.createReadonly=function(b){if(!isFunction(b)){return new Excel()}try{var a=new Excel();b(a)}finally{if(a){a.quitDiscardChanges()}}};Excel.available=function(){try{var a=new ActiveXObject("Excel.Application");return true}catch(b){return false}};Excel.convertToCsv=function(a){Excel.openReadonly(a,function(b){b.each(function(d){d.activate();var c=a+"_"+d.getName()+".csv";b.saveAsCsv(c)})})};Excel.convertToTsv=function(a){Excel.openReadonly(a,function(b){b.each(function(d){d.activate();var c=a+"_"+d.getName()+".tsv";b.saveAsTsv(c)})})};Excel.array2dToSafeArray2d=function(b){var a=undefined;Excel.createReadonly(function(h){var f=h.getSheetByIndex(1);var d,c;for(d=0;d<b.length;d++){for(c=0;c<b[d].length;c++){var g=b[d][c];f.setValue(d+1,c+1,g)}}a=f.getRawObject().Cells(1,1).CurrentRegion.Value});return a};Excel.convertFromCsv=function(d,b){var c=d;if(d.endsWith(".csv")){c=d+".txt";File.copy(d,c)}var a=b;if(b===undefined){a=Excel.generateDefaultColumnInfo(c,",")}var f=new Excel(c,Excel.IN_FILETYPE_CSV,a);f.saveAsExcel(d+".xls");f.quit();if(d!==c){File.unlink(c)}};Excel.convertFromTsv=function(c,b){var a=b;if(b===undefined){a=Excel.generateDefaultColumnInfo(c,"\t")}var d=new Excel(c,Excel.IN_FILETYPE_TSV,a);d.saveAsExcel(c+".xls");d.quit()};Excel.generateDefaultColumnInfo=function(c,b){var a=[];File.open(c,"r",function(g){var d=g.readLine();var h=d.split(b).length;var f;for(f=0;f<h;f++){a.push([(f+1),Excel.COLUMN_TYPE_TEXT])}});return a};Excel.prototype={each:function(b){var a=new Enumerator(this.workbookObj.Sheets);for(;!a.atEnd();a.moveNext()){b(new ExcelSheet(a.item()))}},getSheetByName:function(b){var a;this.each(function(c){if(c.getName()===b){a=c}});return a},getSheetByIndex:function(b){var a;var c=0;this.each(function(d){if(c===b){a=d}c++});return a},addSheet:function(d,c){var a=c||this.getSheetCount()-1;var b=this.getSheetByIndex(a).getRawObject();var f=this.workbookObj.Sheets.Add(null,b,1,null);f.Name=d;return new ExcelSheet(f)},getSheetCount:function(){return this.workbookObj.Sheets.Count},save:function(){this.workbookObj.Save()},getFullPathName:function(b){var a=b;if(a.indexOf(File.PATH_SEPARATOR)===-1){a=File.realpath(a)}return a},saveAs:function(a){this.workbookObj.SaveAs(this.getFullPathName(a))},saveAsCsv:function(a){this.workbookObj.SaveAs(this.getFullPathName(a),Excel.FILE_FORMAT_CSV)},saveAsTsv:function(a){this.workbookObj.SaveAs(this.getFullPathName(a),Excel.FILE_FORMAT_TSV)},saveAsExcel:function(a){this.workbookObj.SaveAs(this.getFullPathName(a),Excel.FILE_FORMAT_EXCEL)},quitDiscardChanges:function(){this.workbookObj.Close(false);this.excelObj.Quit()},quit:function(){this.workbookObj.Close();this.excelObj.Quit()},removeSheets:function(c){var b;for(b=0;b<c;b++){var a=this.getSheetByIndex(0);a.remove()}},activateHeadSheet:function(){this.getSheetByIndex(0).activate()}};var ExcelSheet=function(a){this.sheetObj=a};ExcelSheet.prototype={getName:function(){return this.sheetObj.Name},setName:function(a){return this.sheetObj.Name=a},setValue:function(c,a,b){this.sheetObj.Cells(c,a).Value=b},setArrayValue:function(f,d,c){if(!c){c=1}var b=d.length;for(var a=0;a<b;a++){this.sheetObj.Cells(f,a+c).Value=d[a]}},getValue:function(b,a){return this.sheetObj.Cells(b,a).Value},getRawObject:function(){return this.sheetObj},autoFit:function(){this.sheetObj.Columns("A:IV").AutoFit()},drawBorder:function(){var a=this.sheetObj.Cells(1,1).CurrentRegion;for(var b=7;b<=10;b++){a.Borders(b).LineStyle=1}if(a.Columns.Count>1){a.Borders(11).LineStyle=1}if(a.Rows.Count>1){a.Borders(12).LineStyle=1}},setFormat:function(c,a,b){this.sheetObj.Cells(c,a).NumberFormatLocal=b},addComment:function(c,a,d,b){this.sheetObj.Cells(c,a).AddComment();this.sheetObj.Cells(c,a).Comment.Visible=b;this.sheetObj.Cells(c,a).Comment.Text(d)},activate:function(){this.sheetObj.Activate()},remove:function(){this.sheetObj.Delete()},setZoom:function(a){this.activate();this.sheetObj.Application.ActiveWindow.Zoom=a},setCenterHeader:function(a){this.sheetObj.PageSetup.CenterHeader=a},setLeftHeader:function(a){this.sheetObj.PageSetup.LeftHeader=a},setRightHeader:function(a){this.sheetObj.PageSetup.RightHeader=a},setCenterFooter:function(a){this.sheetObj.PageSetup.CenterFooter=a},setLeftFooter:function(a){this.sheetObj.PageSetup.LeftFooter=a},setRightFooter:function(a){this.sheetObj.PageSetup.RightFooter=a},copy:function(b,a){this.sheetObj.Cells(b,a).Copy()},setBackgroundColor:function(b,a,c){this.sheetObj.Cells(b,a).Interior.ColorIndex=c},setFontColor:function(b,a,c){this.sheetObj.Cells(b,a).Font.ColorIndex=c},setFontBold:function(c,a,b){this.sheetObj.Cells(c,a).Font.Bold=b},setFontItalic:function(b,a,c){this.sheetObj.Cells(b,a).Font.Italic=c},setFontStrikethrough:function(c,b,a){this.sheetObj.Cells(c,b).Font.Strikethrough=a},setFontUnderline:function(c,b,a){this.sheetObj.Cells(c,b).Font.Underline=a},selectCell:function(b,a){this.sheetObj.Cells(b,a).Select()},selectRange:function(c,d,a,b){this.sheetObj.Range(this.sheetObj.Cells(c,d),this.sheetObj.Cells(a,b)).Select()},addHyperLink:function(f,c,a,d){if(!d){d=a}var b=this.sheetObj.Cells(f,c);this.sheetObj.Hyperlinks.Add(b,a,"",a,d)},deleteHyperLink:function(b,a){this.sheetObj.Cells(b,a).Hyperlinks.Delete()}};var LogEvent={};LogEvent.success=function(a){Const.WSHELL.LogEvent(Const.LOG_EVENT_TYPE_SUCCESS,a)};LogEvent.error=function(a){Const.WSHELL.LogEvent(Const.LOG_EVENT_TYPE_ERROR,a)};LogEvent.warning=function(a){Const.WSHELL.LogEvent(Const.LOG_EVENT_TYPE_WARNING,a)};LogEvent.information=function(a){Const.WSHELL.LogEvent(Const.LOG_EVENT_TYPE_INFORMATION,a)};LogEvent.auditSuccess=function(a){Const.WSHELL.LogEvent(Const.LOG_EVENT_TYPE_AUDIT_SUCCESS,a)};LogEvent.auditFailure=function(a){Const.WSHELL.LogEvent(Const.LOG_EVENT_TYPE_AUDIT_FAILURE,a)};var Shell={};Shell.open=function(a){Const.SHELLAPP.Open(a)};Shell.serviceStart=function(a,b){myIsPersistent=b||false;return Const.SHELLAPP.ServiceStart(a,myIsPersistent)};Shell.serviceStop=function(a,b){myIsPersistent=b||false;return Const.SHELLAPP.ServiceStop(a,myIsPersistent)};Shell.unzip=function(b,f){if(!File.exist(b)){throw new Error(-1,"File Not Found: "+b)}if(!Dir.exist(f)){throw new Error(-1,"Path Not Found: "+f)}var a=Const.SHELLAPP.Namespace(b);var c=a.Items();var g=Const.SHELLAPP.Namespace(f);var d;for(d=0;d<c.Count;d++){g.copyhere(c.item(d))}};Shell.zip=function(d,f){if(!Dir.exist(f)){throw new Error(-1,"Path Not Found: "+unzipTo)}File.open(d,"w",function(h){h.write("PK\5\6\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0")});var d=Const.SHELLAPP.Namespace(d);var c=Const.SHELLAPP.Namespace(f);var a=c.Items();var b;for(b=0;b<a.Count;b++){var g=a.item(b);d.CopyHere(g)}while(true){sleep(100);if(d.Items().Count===a.Count){break}}};var JSON={};JSON.parse=function(str){return eval("("+str+")")};JSON.stringify=function(a){return a.toString()};
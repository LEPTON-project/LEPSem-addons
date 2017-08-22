/**
 * 
 *  @module      	Topics
 *  @author         Chio Maisriml, Dietrich Roland Pehlke, erpe
 *  @license        http://creativecommons.org/licenses/by/3.0/
 *  @platform       see info.php of this addon
 *  @license terms  see info.php of this addon
 *  @version        see info.php of this module
 *  
 *
 */

//  We try to set the semantic ui classes to some backend buttons
var ref = document.getElementById("topics_save");
if(ref) ref.setAttribute("class", "ui button green");

var ref = document.getElementById("topics_save_back");
if(ref) ref.setAttribute("class", "ui button green");

var ref = document.getElementById("topics_cancel");
if(ref) ref.setAttribute("class", "ui button red");

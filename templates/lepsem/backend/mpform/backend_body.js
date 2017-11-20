/**
 *
 * 
 *  @module         MPForm
 *  @author         Frank Heyne, Dietrich Roland Pehlke, erpe
 *  @license        http://www.gnu.org/licenses/gpl.htm
 *  @platform       see info.php of this addon
 *  @license terms  see info.php of this addon
 *  @version        see info.php of this module
 *  
 *
 */
 
function mpform_settings_set_email_from ( aSelectRef )
{
	var curr = aSelectRef.options[ aSelectRef.selectedIndex ].value;
	// alert( curr );
	var ref = document.getElementById("email_from_f_slave");
	if(ref)
	{
		ref.style.display = (curr=="") ? 'block' : 'none';
 		//alert("s: "+ref.style.display );
	}
	return true;
}

if ( typeof jQuery != 'undefined' ) {
	// check / uncheck all checkboxes
	jQuery('[type="checkbox"]#checkall').click( function() {
		jQuery('[id^="marked_submission_"]').attr('checked', jQuery(this).is(':checked'));
    });
}
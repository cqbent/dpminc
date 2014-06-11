

<?php
	//echo  $fields['field_client_status_value']->raw;
	if ($fields['field_client_status_value']->raw == 1) {
		echo '<div class="views-field-title">'.$fields['title']->content.'</div>';
	}
	else {
		echo '<div class="views-field-title">'.strip_tags($fields['title']->content).'</div>';
	}
	//echo '<div class="views-row mtnav" id="id'.$fields['uid']->content.'">'.$fields['value_1']->content.' '.$fields['value_3']->content.'</div>';

?>



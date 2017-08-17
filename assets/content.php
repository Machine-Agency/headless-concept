<?php
/**
 * Asset:       content.php
 * @author      Robin Bastien [robin@machine-agency.com]
 * @copyright   Machine Agency [hello@machine-agency.com]
 * @package     WordPress
 * @subpackage  Machine
 */

// We call exec with escapeshellcmd to be safe!
$content = exec( escapeshellcmd( 'node scraper.js' ) );

var_dump( $content );

?>

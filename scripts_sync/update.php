<?php

  $output = shell_exec("cd ../..; _dev/fetch_resources.sh 2>&1");

  echo nl2br($output);

  echo "<br/><br/>Update Complete :)";

 ?>

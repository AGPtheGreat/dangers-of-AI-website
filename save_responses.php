<?php
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
  http_response_code(400);
  echo "No data received";
  exit;
}

$filename = "survey_results.csv";

// headers if the file doesn't exist
$writeHeaders = !file_exists($filename);
$fp = fopen($filename, 'a');

if ($writeHeaders) {
  fputcsv($fp, ['Question', 'Answer']);
}

// add for each response
foreach ($data as $response) {
  fputcsv($fp, [$response['question'], $response['answer']]);
}

fclose($fp);
echo "sucessfully saved";
?>

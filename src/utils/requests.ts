const languages = [
  {
    language: "cURL",
    code: 'curl -X GET "<URL>" \\\n  -H "<Header-Name>: <Header-Value>" \\\n  --cookie "<Cookie-Name>=<Cookie-Value>"',
  },
  {
    language: "C#",
    code: 'using System;\nusing System.Net.Http;\nusing System.Net.Http.Headers;\nusing System.Threading.Tasks;\n\nclass Program {\n  static async Task Main() {\n    using HttpClient client = new HttpClient();\n    client.DefaultRequestHeaders.Add("<Header-Name>", "<Header-Value>");\n    client.DefaultRequestHeaders.Add("Cookie", "<Cookie-Name>=<Cookie-Value>");\n    \n    HttpResponseMessage response = await client.GetAsync("<URL>");\n    string result = await response.Content.ReadAsStringAsync();\n    Console.WriteLine(result);\n  }\n}',
  },
  {
    language: "Go",
    code: 'package main\n\nimport (\n  "fmt"\n  "io/ioutil"\n  "net/http"\n)\n\nfunc main() {\n  client := &http.Client{}\n  req, _ := http.NewRequest("GET", "<URL>", nil)\n  req.Header.Add("<Header-Name>", "<Header-Value>")\n  req.Header.Add("Cookie", "<Cookie-Name>=<Cookie-Value>")\n  \n  resp, err := client.Do(req)\n  if err != nil {\n    fmt.Println(err)\n    return\n  }\n  defer resp.Body.Close()\n  body, _ := ioutil.ReadAll(resp.Body)\n  fmt.Println(string(body))\n}',
  },
  {
    language: "Java",
    code: 'import java.io.*;\nimport java.net.*;\n\npublic class Main {\n  public static void main(String[] args) throws Exception {\n    URL url = new URL("<URL>");\n    HttpURLConnection conn = (HttpURLConnection) url.openConnection();\n    conn.setRequestMethod("GET");\n    conn.setRequestProperty("<Header-Name>", "<Header-Value>");\n    conn.setRequestProperty("Cookie", "<Cookie-Name>=<Cookie-Value>");\n    \n    BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));\n    String inputLine;\n    while ((inputLine = in.readLine()) != null) {\n      System.out.println(inputLine);\n    }\n    in.close();\n  }\n}',
  },
  {
    language: "NodeJS",
    code: "const https = require('https');\n\nconst options = {\n  hostname: '<URL>',\n  method: 'GET',\n  headers: {\n    '<Header-Name>': '<Header-Value>',\n    'Cookie': '<Cookie-Name>=<Cookie-Value>'\n  }\n};\n\nconst req = https.request(options, res => {\n  let data = '';\n  res.on('data', chunk => { data += chunk; });\n  res.on('end', () => { console.log(data); });\n});\n\nreq.on('error', error => { console.error(error); });\nreq.end();",
  },
  {
    language: "PHP",
    code: '<?php\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, "<URL>");\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($ch, CURLOPT_HTTPHEADER, array("<Header-Name>: <Header-Value>"));\ncurl_setopt($ch, CURLOPT_COOKIE, "<Cookie-Name>=<Cookie-Value>");\n$output = curl_exec($ch);\ncurl_close($ch);\necho $output;\n?>',
  },
  {
    language: "Python",
    code: 'import requests\n\nheaders = {"<Header-Name>": "<Header-Value>"}\ncookies = {"<Cookie-Name>": "<Cookie-Value>"}\n\nresponse = requests.get("<URL>", headers=headers, cookies=cookies)\nprint(response.text)',
  },
  {
    language: "Rust",
    code: 'use reqwest::blocking::Client;\nuse std::collections::HashMap;\n\nfn main() {\n    let client = Client::new();\n    let mut headers = reqwest::header::HeaderMap::new();\n    headers.insert("<Header-Name>", "<Header-Value>".parse().unwrap());\n    \n    let mut cookies = HashMap::new();\n    cookies.insert("<Cookie-Name>", "<Cookie-Value>");\n    \n    let response = client.get("<URL>")\n        .headers(headers)\n        .send()\n        .unwrap();\n    \n    println!("{}", response.text().unwrap());\n}',
  },
  {
    language: "Swift",
    code: 'import Foundation\n\nlet url = URL(string: "<URL>")!\nvar request = URLRequest(url: url)\nrequest.httpMethod = "GET"\nrequest.setValue("<Header-Value>", forHTTPHeaderField: "<Header-Name>")\nrequest.setValue("<Cookie-Name>=<Cookie-Value>", forHTTPHeaderField: "Cookie")\n\nlet task = URLSession.shared.dataTask(with: request) { data, response, error in\n    if let data = data {\n        print(String(data: data, encoding: .utf8)!)\n    }\n}\ntask.resume()',
  },
  {
    language: "Ruby",
    code: "require 'net/http'\nrequire 'uri'\n\nuri = URI('<URL>')\nrequest = Net::HTTP::Get.new(uri)\nrequest['<Header-Name>'] = '<Header-Value>'\nrequest['Cookie'] = '<Cookie-Name>=<Cookie-Value>'\n\nresponse = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|\n  http.request(request)\nend\n\nputs response.body",
  },
  {
    language: "Kotlin",
    code: 'import java.net.HttpURLConnection\nimport java.net.URL\n\nfun main() {\n    val url = URL("<URL>")\n    val connection = url.openConnection() as HttpURLConnection\n    connection.requestMethod = "GET"\n    connection.setRequestProperty("<Header-Name>", "<Header-Value>")\n    connection.setRequestProperty("Cookie", "<Cookie-Name>=<Cookie-Value>")\n    \n    val response = connection.inputStream.bufferedReader().use { it.readText() }\n    println(response)\n}',
  },
  {
    language: "Perl",
    code: "use LWP::UserAgent;\n\nmy $ua = LWP::UserAgent->new;\nmy $req = HTTP::Request->new(GET => '<URL>');\n$req->header('<Header-Name>' => '<Header-Value>');\n$req->header('Cookie' => '<Cookie-Name>=<Cookie-Value>');\n\nmy $res = $ua->request($req);\nprint $res->decoded_content;",
  },
  {
    language: "Shell (wget)",
    code: 'wget --header="<Header-Name>: <Header-Value>" --header="Cookie: <Cookie-Name>=<Cookie-Value>" "<URL>" -O -',
  },
];

export default languages;

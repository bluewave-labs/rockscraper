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
];

export default languages;

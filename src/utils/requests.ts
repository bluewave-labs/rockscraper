import { CodeByLanguage, HeaderFieldInterface } from './interfaces';

const languages = [
  {
    language: 'cURL',
    code: 'curl -X POST "https://rockscraper.api.com" \\\n-H "Authentication: <your-auth-token>" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "url": "<URL>",\n  "headers": "<Headers>",\n  "cookies": "<Cookies>",\n  "useAi": "<UseAi>",\n  "aiQuery": "<AiQuery>",\n  "returnMarkdown": "<ReturnMarkdown>",\n  "nodes": "<Nodes>",\n  "region": "<Region>"\n}\'',
  },
  {
    language: 'C#',
    code: 'using System;\nusing System.Net.Http;\nusing System.Net.Http.Headers;\nusing System.Text;\nusing System.Threading.Tasks;\n\nclass Program {\n    static async Task Main() {\n        using HttpClient client = new HttpClient();\n        client.DefaultRequestHeaders.Add("Authentication", "<your-auth-token>");\n        \n        var payload = new {\n            url = "<URL>",\n            headers = "<Headers>",\n            cookies = "<Cookies>",\n            useAi = "<UseAi>",\n            aiQuery = "<AiQuery>",\n            returnMarkdown = "<ReturnMarkdown>",\n            nodes = "<Nodes>",\n            region = "<Region>"\n        };\n        \n        var content = new StringContent(\n            System.Text.Json.JsonSerializer.Serialize(payload),\n            Encoding.UTF8,\n            "application/json");\n\n        HttpResponseMessage response = await client.PostAsync("https://rockscraper.api.com", content);\n        string result = await response.Content.ReadAsStringAsync();\n        Console.WriteLine(result);\n    }\n}',
  },
  {
    language: 'Go',
    code: 'package main\n\nimport (\n    "bytes"\n    "encoding/json"\n    "fmt"\n    "io/ioutil"\n    "net/http"\n)\n\nfunc main() {\n    payload := map[string]string{\n        "url":           "<URL>",\n        "headers":       "<Headers>",\n        "cookies":       "<Cookies>",\n        "useAi":        "<UseAi>",\n        "aiQuery":      "<AiQuery>",\n        "returnMarkdown": "<ReturnMarkdown>",\n        "nodes":        "<Nodes>",\n        "region":       "<Region>",\n    }\n    \n    jsonData, _ := json.Marshal(payload)\n    \n    client := &http.Client{}\n    req, _ := http.NewRequest("POST", "https://rockscraper.api.com", bytes.NewBuffer(jsonData))\n    \n    req.Header.Add("Authentication", "<your-auth-token>")\n    req.Header.Add("Content-Type", "application/json")\n    \n    resp, err := client.Do(req)\n    if err != nil {\n        fmt.Println(err)\n        return\n    }\n    defer resp.Body.Close()\n    \n    body, _ := ioutil.ReadAll(resp.Body)\n    fmt.Println(string(body))\n}',
  },
  {
    language: 'Java',
    code: 'import java.io.*;\nimport java.net.*;\nimport java.nio.charset.StandardCharsets;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        URL url = new URL("https://rockscraper.api.com");\n        HttpURLConnection conn = (HttpURLConnection) url.openConnection();\n        conn.setRequestMethod("POST");\n        conn.setRequestProperty("Authentication", "<your-auth-token>");\n        conn.setRequestProperty("Content-Type", "application/json");\n        conn.setDoOutput(true);\n\n        String jsonInputString = "{"\n            + "\\"url\\": \\"<URL>\\","\n            + "\\"headers\\": \\"<Headers>\\","\n            + "\\"cookies\\": \\"<Cookies>\\","\n            + "\\"useAi\\": \\"<UseAi>\\","\n            + "\\"aiQuery\\": \\"<AiQuery>\\","\n            + "\\"returnMarkdown\\": \\"<ReturnMarkdown>\\","\n            + "\\"nodes\\": \\"<Nodes>\\","\n            + "\\"region\\": \\"<Region>\\""\n            + "}";\n\n        try(OutputStream os = conn.getOutputStream()) {\n            byte[] input = jsonInputString.getBytes(StandardCharsets.UTF_8);\n            os.write(input, 0, input.length);\n        }\n\n        BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));\n        String inputLine;\n        while ((inputLine = in.readLine()) != null) {\n            System.out.println(inputLine);\n        }\n        in.close();\n    }\n}',
  },
  {
    language: 'NodeJS',
    code: 'const payload = {\n  url: "<URL>",\n  headers: "<Headers>",\n  cookies: "<Cookies>",\n  useAi: "<UseAi>",\n  aiQuery: "<AiQuery>",\n  returnMarkdown: "<ReturnMarkdown>",\n  nodes: "<Nodes>",\n  region: "<Region>"\n};\n\nfetch("https://rockscraper.api.com", {\n  method: "POST",\n  headers: {\n    "Authentication": "<your-auth-token>",\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify(payload)\n})\n  .then(response => response.text())\n  .then(data => console.log(data))\n  .catch(error => console.error("Error:", error));',
  },
  {
    language: 'PHP',
    code: '<?php\n$ch = curl_init();\n$payload = array(\n    "url" => "<URL>",\n    "headers" => "<Headers>",\n    "cookies" => "<Cookies>",\n    "useAi" => "<UseAi>",\n    "aiQuery" => "<AiQuery>",\n    "returnMarkdown" => "<ReturnMarkdown>",\n    "nodes" => "<Nodes>",\n    "region" => "<Region>"\n);\n\ncurl_setopt($ch, CURLOPT_URL, "https://rockscraper.api.com");\ncurl_setopt($ch, CURLOPT_POST, 1);\ncurl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($ch, CURLOPT_HTTPHEADER, array(\n    "Authentication: <your-auth-token>",\n    "Content-Type: application/json"\n));\n\n$output = curl_exec($ch);\ncurl_close($ch);\necho $output;\n?>',
  },
  {
    language: 'Python',
    code: 'import requests\nimport json\n\npayload = {\n    "url": "<URL>",\n    "headers": "<Headers>",\n    "cookies": "<Cookies>",\n    "useAi": "<UseAi>",\n    "aiQuery": "<AiQuery>",\n    "returnMarkdown": "<ReturnMarkdown>",\n    "nodes": "<Nodes>",\n    "region": "<Region>"\n}\n\nheaders = {\n    "Authentication": "<your-auth-token>",\n    "Content-Type": "application/json"\n}\n\nresponse = requests.post("https://rockscraper.api.com", headers=headers, json=payload)\nprint(response.text)',
  },
  {
    language: 'Rust',
    code: 'use reqwest::blocking::Client;\nuse serde_json::json;\n\nfn main() {\n    let client = Client::new();\n    let mut headers = reqwest::header::HeaderMap::new();\n    \n    headers.insert("Authentication", "<your-auth-token>".parse().unwrap());\n    headers.insert("Content-Type", "application/json".parse().unwrap());\n\n    let payload = json!({\n        "url": "<URL>",\n        "headers": "<Headers>",\n        "cookies": "<Cookies>",\n        "useAi": "<UseAi>",\n        "aiQuery": "<AiQuery>",\n        "returnMarkdown": "<ReturnMarkdown>",\n        "nodes": "<Nodes>",\n        "region": "<Region>"\n    });\n\n    let response = client.post("https://rockscraper.api.com")\n        .headers(headers)\n        .json(&payload)\n        .send()\n        .unwrap();\n    \n    println!("{}", response.text().unwrap());\n}',
  },
  {
    language: 'Swift',
    code: 'import Foundation\n\nlet url = URL(string: "https://rockscraper.api.com")!\nvar request = URLRequest(url: url)\nrequest.httpMethod = "POST"\n\nrequest.setValue("<your-auth-token>", forHTTPHeaderField: "Authentication")\nrequest.setValue("application/json", forHTTPHeaderField: "Content-Type")\n\nlet payload: [String: Any] = [\n    "url": "<URL>",\n    "headers": "<Headers>",\n    "cookies": "<Cookies>",\n    "useAi": "<UseAi>",\n    "aiQuery": "<AiQuery>",\n    "returnMarkdown": "<ReturnMarkdown>",\n    "nodes": "<Nodes>",\n    "region": "<Region>"\n]\n\nrequest.httpBody = try? JSONSerialization.data(withJSONObject: payload)\n\nlet task = URLSession.shared.dataTask(with: request) { data, response, error in\n    if let data = data {\n        print(String(data: data, encoding: .utf8)!)\n    }\n}\ntask.resume()',
  },
  {
    language: 'Ruby',
    code: "require 'net/http'\nrequire 'uri'\nrequire 'json'\n\nuri = URI('https://rockscraper.api.com')\nrequest = Net::HTTP::Post.new(uri)\n\nrequest['Authentication'] = '<your-auth-token>'\nrequest['Content-Type'] = 'application/json'\n\nrequest.body = {\n  url: '<URL>',\n  headers: '<Headers>',\n  cookies: '<Cookies>',\n  useAi: '<UseAi>',\n  aiQuery: '<AiQuery>',\n  returnMarkdown: '<ReturnMarkdown>',\n  nodes: '<Nodes>',\n  region: '<Region>'\n}.to_json\n\nresponse = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|\n  http.request(request)\nend\n\nputs response.body",
  },
  {
    language: 'Kotlin',
    code: 'import java.net.HttpURLConnection\nimport java.net.URL\n\nfun main() {\n    val url = URL("https://rockscraper.api.com")\n    val connection = url.openConnection() as HttpURLConnection\n    connection.requestMethod = "POST"\n    \n    connection.setRequestProperty("Authentication", "<your-auth-token>")\n    connection.setRequestProperty("Content-Type", "application/json")\n    connection.doOutput = true\n\n    val jsonInputString = """\n        {\n            "url": "<URL>",\n            "headers": "<Headers>",\n            "cookies": "<Cookies>",\n            "useAi": "<UseAi>",\n            "aiQuery": "<AiQuery>",\n            "returnMarkdown": "<ReturnMarkdown>",\n            "nodes": "<Nodes>",\n            "region": "<Region>"\n        }\n    """.trimIndent()\n\n    connection.outputStream.use { os ->\n        val input = jsonInputString.toByteArray(charset("utf-8"))\n        os.write(input, 0, input.length)\n    }\n\n    val response = connection.inputStream.bufferedReader().use { it.readText() }\n    println(response)\n}',
  },
  {
    language: 'Perl',
    code: "use LWP::UserAgent;\nuse JSON;\n\nmy $ua = LWP::UserAgent->new;\nmy $req = HTTP::Request->new(POST => 'https://rockscraper.api.com');\n\n$req->header('Authentication' => '<your-auth-token>');\n$req->header('Content-Type' => 'application/json');\n\nmy $payload = {\n    url => '<URL>',\n    headers => '<Headers>',\n    cookies => '<Cookies>',\n    useAi => '<UseAi>',\n    aiQuery => '<AiQuery>',\n    returnMarkdown => '<ReturnMarkdown>',\n    nodes => '<Nodes>',\n    region => '<Region>'\n};\n\n$req->content(encode_json($payload));\n\nmy $res = $ua->request($req);\nprint $res->decoded_content;"
  },
  {
    language: 'Shell (wget)',
    code: 'wget --header="Authentication: <your-auth-token>" \\\n--header="Content-Type: application/json" \\\n--post-data=\'{\n  "url": "<URL>",\n  "headers": "<Headers>",\n  "cookies": "<Cookies>",\n  "useAi": "<UseAi>",\n  "aiQuery": "<AiQuery>",\n  "returnMarkdown": "<ReturnMarkdown>",\n  "nodes": "<Nodes>",\n  "region": "<Region>"\n}\' \\\n"https://rockscraper.api.com" -O -',
  },
];

export default languages;

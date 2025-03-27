import { HeaderFieldInterface, RequestExample } from "./interfaces";

const languages = [
  {
    language: "cURL",
    baseCode: 'curl -X GET "<URL>" \u005C \n',
    addHeaders: ' -H "<Header-Name>: <Header-Value>"',
    addCookies: '--cookie "<Cookie-Name>=<Cookie-Value>"',
    endCode: "",
  },
  {
    language: "C#",
    baseCode:
      "using System;\nusing System.Net.Http;\nusing System.Net.Http.Headers;\nusing System.Threading.Tasks;\n\nclass Program {\n  static async Task Main() {\n    using HttpClient client = new HttpClient();\n",
    addHeaders:
      '    client.DefaultRequestHeaders.Add("<Header-Name>", "<Header-Value>");',
    addCookies:
      '    client.DefaultRequestHeaders.Add("Cookie", "<Cookie-Name>=<Cookie-Value>");',
    endCode:
      '    HttpResponseMessage response = await client.GetAsync("<URL>");\n    string result = await response.Content.ReadAsStringAsync();\n    Console.WriteLine(result);\n  }\n}',
  },
  {
    language: "Go",
    baseCode:
      'package main\n\nimport (\n  "fmt"\n  "io/ioutil"\n  "net/http"\n)\n\nfunc main() {\n  client := &http.Client{}\n  req, _ := http.NewRequest("GET", "<URL>", nil)',
    addHeaders: '  req.Header.Add("<Header-Name>", "<Header-Value>")',
    addCookies: '  req.Header.Add("Cookie", "<Cookie-Name>=<Cookie-Value>")',
    endCode:
      "  resp, err := client.Do(req)\n  if err != nil {\n    fmt.Println(err)\n    return\n   }\n  defer resp.Body.Close()\n  body, _ := ioutil.ReadAll(resp.Body)\n  fmt.Println(string(body))\n}",
  },
  {
    language: "Java",
    baseCode:
      'import java.io.*;\nimport java.net.*;\n\npublic class Main {\n  public static void main(String[] args) throws Exception {\n    URL url = new URL("<URL>");\n    HttpURLConnection conn = (HttpURLConnection) url.openConnection();\n    conn.setRequestMethod("GET");\n',
    addHeaders: '    conn.setRequestProperty("<Header-Name>", "<Header-Value>");',
    addCookies:
      '    conn.setRequestProperty("Cookie", "<Cookie-Name>=<Cookie-Value>");',
    endCode:
      "    BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));\n    String inputLine;\n    while ((inputLine = in.readLine()) != null) {\n      System.out.println(inputLine);\n    }\n    in.close();\n  }\n}",
  },
  {
    language: "NodeJS",
    baseCode: 'const url = "<URL>";\n\n',
    addHeaders: 'const headers = { "<Header-Name>": "<Header-Value>" };',
    addCookies: 'const cookies = "<Cookie-Name>=<Cookie-Value>";',
    endCode:
      'fetch(url, {\n  method: "GET",\n  headers: { ...headers, "Cookie": cookies }\n})\n  .then(response => response.text())\n  .then(data => console.log(data))\n  .catch(error => console.error("Error:", error));',
  },
  {
    language: "PHP",
    baseCode:
      '$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, "<URL>");\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n',
    addHeaders:
      'curl_setopt($ch, CURLOPT_HTTPHEADER, array("<Header-Name>: <Header-Value>"));',
    addCookies:
      'curl_setopt($ch, CURLOPT_COOKIE, "<Cookie-Name>=<Cookie-Value>");',
    endCode: "$output = curl_exec($ch);\ncurl_close($ch);\necho $output;\n",
  },
  {
    language: "Python",
    baseCode: "import requests\n\n",
    addHeaders: 'headers = {"<Header-Name>": "<Header-Value>"}',
    addCookies: 'cookies = "<Cookie-Name>": "<Cookie-Value>"',
    endCode:
      'response = requests.get("<URL>", headers=headers, cookies=cookies)\nprint(response.text)',
  },
  {
    language: "Rust",
    baseCode:
      "use reqwest::blocking::Client;\nuse std::collections::HashMap;\n\nfn main() {\n  let client = Client::new();\n  let mut headers = reqwest::header::HeaderMap::new();\n  let mut cookies = HashMap::new();\n",
    addHeaders:
      '  headers.insert("<Header-Name>", "<Header-Value>".parse().unwrap());',
    addCookies: '  cookies.insert("<Cookie-Name>", "<Cookie-Value>");',
    endCode:
      '  let response = client.get("<URL>")\n    .headers(headers)\n    .send()\n    .unwrap();\n    \n  println!("{}", response.text().unwrap());\n}',
  },
  {
    language: "Swift",
    baseCode:
      'import Foundation\n\nlet url = URL(string: "<URL>")!\nvar request = URLRequest(url: url)\nrequest.httpMethod = "GET"\n',
    addHeaders:
      'request.setValue("<Header-Value>", forHTTPHeaderField: "<Header-Name>")',
    addCookies:
      'request.setValue("<Cookie-Name>=<Cookie-Value>", forHTTPHeaderField: "Cookie")',
    endCode:
      "let task = URLSession.shared.dataTask(with: request) { data, response, error in\n    if let data = data {\n        print(String(data: data, encoding: .utf8)!)\n    }\n}\ntask.resume()",
  },
  {
    language: "Ruby",
    baseCode:
      "require 'net/http'\nrequire 'uri'\n\nuri = URI('<URL>')\nrequest = Net::HTTP::Get.new(uri)\n",
    addHeaders: "request['<Header-Name>'] = '<Header-Value>'",
    addCookies: "request['Cookie'] = '<Cookie-Name>=<Cookie-Value>'",
    endCode:
      "response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|\n  http.request(request)\nend\n\nputs response.body",
  },
  {
    language: "Kotlin",
    baseCode:
      'import java.net.HttpURLConnection\nimport java.net.URL\n\nfun main() {\n    val url = URL("<URL>")\n    val connection = url.openConnection() as HttpURLConnection\n    connection.requestMethod = "GET"\n',
    addHeaders:
      '    connection.setRequestProperty("<Header-Name>", "<Header-Value>")',
    addCookies:
      '    connection.setRequestProperty("Cookie", "<Cookie-Name>=<Cookie-Value>")',
    endCode:
      "    val response = connection.inputStream.bufferedReader().use { it.readText() }\n    println(response)\n}",
  },
  {
    language: "Perl",
    baseCode:
      "use LWP::UserAgent;\n\nmy $ua = LWP::UserAgent->new;\nmy $req = HTTP::Request->new(GET => '<URL>');\n",
    addHeaders: "$req->header('<Header-Name>' => '<Header-Value>');",
    addCookies: "$req->header('Cookie' => '<Cookie-Name>=<Cookie-Value>');",
    endCode: "my $res = $ua->request($req);\nprint $res->decoded_content;",
  },
  {
    language: "Shell (wget)",
    baseCode: "wget \u005C \n",
    addHeaders: '--header="<Header-Name>: <Header-Value>"',
    addCookies: '--header="Cookie: <Cookie-Name>=<Cookie-Value>"',
    endCode: '"<URL>" -O -',
  },
];

export const buildCookies = (
  selectedCode: RequestExample,
  cookies: string[]
) => {
  switch (selectedCode.language) {
    case "NodeJS":
      return `const cookies = "${cookies.join(", ")}";\n`;
    case "cURL":
      return (
        cookies.reduce((acc, cookie, i, arr) => {
          return (
            acc +
            selectedCode.addCookies.replace(
              "<Cookie-Name>=<Cookie-Value>",
              cookie
            ) +
            (i !== arr.length - 1 ? " \u005C \n" : "")
          );
        }, "")
      );
    case "Python":
      return `cookies = "${cookies.join('", "')}"\n`;
    case "Rust":
      return cookies.reduce((acc, cookie) => {
        return (
          acc +
          `${selectedCode.addCookies.replace(
            '"<Cookie-Name>", "<Cookie-Value>"',
            `"${cookie}"`
          )}\n`
        );
      }, "");
    case "Shell (wget)":
      return selectedCode.addCookies.replace(
        "<Cookie-Name>=<Cookie-Value>",
        cookies.join(",")
      ) + " \u005C \n";
    default:
      return selectedCode.addCookies.replace(
        "<Cookie-Name>=<Cookie-Value>",
        cookies.join(",")
      ) + "\n";
  }
};

export const buildHeaders = (
  selectedCode: RequestExample,
  headers: HeaderFieldInterface[]
) => {
  switch (selectedCode.language) {
    case "NodeJS":
      return `const headers = {\n${headers.reduce((acc, { key, value }, i) => {
        return i !== 0
          ? acc + `,\n  "${key}": "${value}"`
          : `  "${key}": "${value}"`;
      }, "")}\n};\n`;
    case "cURL":
    case "Shell (wget)":
      return (
        headers.reduce((acc, header) => {
          return (
            acc +
            `${selectedCode.addHeaders
              .replace("<Header-Name>", header.key)
              .replace("<Header-Value>", header.value)} \u005C \n`
          );
        }, "")
      );
    case "PHP":
      return selectedCode.addHeaders.replace(
        '"<Header-Name>: <Header-Value>"',
        headers.reduce((acc, header, i, arr) => {
          return i !== arr.length - 1
            ? acc + `"${header.key}: ${header.value}", `
            : acc + `"${header.key}: ${header.value}"`;
        }, "")
      ) + "\n";
    case "Python":
      return `headers = {\n${headers.reduce((acc, { key, value }, i) => {
        return i !== 0
          ? acc + `,\n  "${key}": "${value}"`
          : `  "${key}": "${value}"`;
      }, "")}\n};\n`;
    default:
      return headers.reduce((acc, header) => {
        return (
          acc +
          `${selectedCode.addHeaders
            .replace("<Header-Name>", header.key)
            .replace("<Header-Value>", header.value)}\n`
        );
      }, "");
  }
};

export default languages;

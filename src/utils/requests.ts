import { RequestExample } from "./interfaces";

const languages = [
  {
    language: "cURL",
    baseCode: 'curl -X GET "<URL>" \u005C',
    addHeaders: ' -H "<Header-Name>: <Header-Value>"',
    addCookies: '--cookie "<Cookie-Name>=<Cookie-Value>"',
    finalCode: "",
  },
  {
    language: "C#",
    baseCode:
      "using System;\nusing System.Net.Http;\nusing System.Net.Http.Headers;\nusing System.Threading.Tasks;\n\nclass Program {\n&nbsp;&nbsp;static async Task Main() {\n&nbsp;&nbsp;&nbsp;&nbsp;using HttpClient client = new HttpClient();",
    addHeaders:
      '&nbsp;&nbsp;&nbsp;&nbsp;client.DefaultRequestHeaders.Add("<Header-Name>", "<Header-Value>");',
    addCookies:
      '&nbsp;&nbsp;&nbsp;&nbsp;client.DefaultRequestHeaders.Add("Cookie", "<Cookie-Name>=<Cookie-Value>");',
    finalCode:
      '&nbsp;&nbsp;&nbsp;&nbsp;HttpResponseMessage response = await client.GetAsync("<URL>");\n&nbsp;&nbsp;&nbsp;&nbsp;string result = await response.Content.ReadAsStringAsync();\n&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(result);\n&nbsp;&nbsp;}\n}',
  },
  {
    language: "Go",
    baseCode:
      'package main\n\nimport (\n&nbsp;&nbsp;"fmt"\n&nbsp;&nbsp;"io/ioutil"\n&nbsp;&nbsp;"net/http"\n)\n\nfunc main() {\n&nbsp;&nbsp;client := &http.Client{}\n&nbsp;&nbsp;req, _ := http.NewRequest("GET", "<URL>", nil)',
    addHeaders: '&nbsp;&nbsp;req.Header.Add("<Header-Name>", "<Header-Value>")',
    addCookies: '&nbsp;&nbsp;req.Header.Add("Cookie", "<Cookie-Name>=<Cookie-Value>")',
    finalCode:
      "&nbsp;&nbsp;resp, err := client.Do(req)\n&nbsp;&nbsp;if err != nil {\n&nbsp;&nbsp;&nbsp;&nbsp;fmt.Println(err)\n&nbsp;&nbsp;&nbsp;&nbsp;return\n &nbsp;&nbsp;}\n&nbsp;&nbsp;defer resp.Body.Close()\n&nbsp;&nbsp;body, _ := ioutil.ReadAll(resp.Body)\n&nbsp;&nbsp;fmt.Println(string(body))\n}",
  },
  {
    language: "Java",
    baseCode:
      'import java.io.*;\nimport java.net.*;\n\npublic class Main {\n  public static void main(String[] args) throws Exception {\n    URL url = new URL("<URL>");\n    HttpURLConnection conn = (HttpURLConnection) url.openConnection();\n    conn.setRequestMethod("GET");',
    addHeaders: 'conn.setRequestProperty("<Header-Name>", "<Header-Value>");',
    addCookies:
      'conn.setRequestProperty("Cookie", "<Cookie-Name>=<Cookie-Value>");',
    finalCode:
      "BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));\n    String inputLine;\n    while ((inputLine = in.readLine()) != null) {\n      System.out.println(inputLine);\n    }\n    in.close();\n  }\n}",
  },
  {
    language: "NodeJS",
    baseCode: 'const url = "<URL>";\n\n',
    addHeaders: 'const headers = { "<Header-Name>": "<Header-Value>" };',
    addCookies: 'const cookies = "<Cookie-Name>=<Cookie-Value>";',
    finalCode:
      'fetch(url, {\n  method: "GET",\n  headers: { ...headers, "Cookie": cookies }\n})\n  .then(response => response.text())\n  .then(data => console.log(data))\n  .catch(error => console.error("Error:", error));',
  },
  {
    language: "PHP",
    baseCode:
      '$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, "<URL>");\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);',
    addHeaders:
      'curl_setopt($ch, CURLOPT_HTTPHEADER, array("<Header-Name>: <Header-Value>"));',
    addCookies:
      'curl_setopt($ch, CURLOPT_COOKIE, "<Cookie-Name>=<Cookie-Value>");',
    finalCode: "$output = curl_exec($ch);\ncurl_close($ch);\necho $output;\n",
  },
  {
    language: "Python",
    baseCode: "import requests",
    addHeaders: 'headers = {"<Header-Name>": "<Header-Value>"}',
    addCookies: 'cookies = {"<Cookie-Name>": "<Cookie-Value>"}',
    finalCode:
      'response = requests.get("<URL>", headers=headers, cookies=cookies)\nprint(response.text)',
  },
  {
    language: "Rust",
    baseCode:
      "use reqwest::blocking::Client;\nuse std::collections::HashMap;\n\nfn main() {\n    let client = Client::new();\nlet mut headers = reqwest::header::HeaderMap::new();\n  let mut cookies = HashMap::new();\n",
    addHeaders:
      'headers.insert("<Header-Name>", "<Header-Value>".parse().unwrap());',
    addCookies: 'cookies.insert("<Cookie-Name>", "<Cookie-Value>");',
    finalCode:
      'let response = client.get("<URL>")\n        .headers(headers)\n        .send()\n        .unwrap();\n    \n    println!("{}", response.text().unwrap());\n}',
  },
  {
    language: "Swift",
    baseCode:
      'import Foundation\n\nlet url = URL(string: "<URL>")!\nvar request = URLRequest(url: url)\nrequest.httpMethod = "GET"',
    addHeaders:
      'request.setValue("<Header-Value>", forHTTPHeaderField: "<Header-Name>")',
    addCookies:
      'request.setValue("<Cookie-Name>=<Cookie-Value>", forHTTPHeaderField: "Cookie")',
    finalCode:
      "let task = URLSession.shared.dataTask(with: request) { data, response, error in\n    if let data = data {\n        print(String(data: data, encoding: .utf8)!)\n    }\n}\ntask.resume()",
  },
  {
    language: "Ruby",
    baseCode:
      "require 'net/http'\nrequire 'uri'\n\nuri = URI('<URL>')\nrequest = Net::HTTP::Get.new(uri)",
    addHeaders: "request['<Header-Name>'] = '<Header-Value>'",
    addCookies: "request['Cookie'] = '<Cookie-Name>=<Cookie-Value>'",
    finalCode:
      "response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|\n  http.request(request)\nend\n\nputs response.body",
  },
  {
    language: "Kotlin",
    baseCode:
      'import java.net.HttpURLConnection\nimport java.net.URL\n\nfun main() {\n    val url = URL("<URL>")\n    val connection = url.openConnection() as HttpURLConnection\n    connection.requestMethod = "GET"',
    addHeaders:
      'connection.setRequestProperty("<Header-Name>", "<Header-Value>")',
    addCookies:
      'connection.setRequestProperty("Cookie", "<Cookie-Name>=<Cookie-Value>")',
    finalCode:
      "val response = connection.inputStream.bufferedReader().use { it.readText() }\n    println(response)\n}",
  },
  {
    language: "Perl",
    baseCode:
      "use LWP::UserAgent;\n\nmy $ua = LWP::UserAgent->new;\nmy $req = HTTP::Request->new(GET => '<URL>');",
    addHeaders: "$req->header('<Header-Name>' => '<Header-Value>');",
    addCookies: "$req->header('Cookie' => '<Cookie-Name>=<Cookie-Value>');",
    finalCode: "my $res = $ua->request($req);\nprint $res->decoded_content;",
  },
  {
    language: "Shell (wget)",
    baseCode: "wget \u005C",
    addHeaders: '--header="<Header-Name>: <Header-Value>"',
    addCookies: '--header="Cookie: <Cookie-Name>=<Cookie-Value>"',
    finalCode: '"<URL>" -O -',
  },
];

export const buildCookies = (
  selectedCode: RequestExample,
  cookies: string[]
) => {
  switch (selectedCode.language) {
    case "NodeJS":
      return `const cookies = "${cookies.join(", ")}";<br/>`;
    case "PHP":
    case "Ruby":
    case "Kotlin":
    case "Perl":
      return selectedCode.addCookies.replace(
        "<Cookie-Name>=<Cookie-Value>",
        cookies.join(", ")
      );
    case "cURL":
      return (
        cookies.reduce((acc, cookie) => {
          return (
            acc +
            selectedCode.addCookies.replace(
              "<Cookie-Name>=<Cookie-Value>",
              cookie
            ) +
            " "
          );
        }, "")
      );
    case "Python":
      return `cookies = {"${cookies.join('", "')}"}`;
    case "Rust":
      return cookies.reduce((acc, cookie) => {
        return (
          acc +
          `${selectedCode.addCookies.replace(
            '"<Cookie-Name>", "<Cookie-Value>"',
            `"${cookie}"`
          )}<br/>`
        );
      }, "");
    // case "Kotlin":
    // case "Pearl":
    //   return selectedCode.addCookies.replace(
    //     "<Cookie-Name>=<Cookie-Value>",
    //     cookies.join(", ")
    //   );
    case "Shell (wget)":
      return selectedCode.addCookies.replace(
        "<Cookie-Name>=<Cookie-Value>",
        cookies.join(",")
      );
    default:
      return cookies.reduce((acc, cookie) => {
        return (
          acc +
          selectedCode.addCookies.replace(
            "<Cookie-Name>=<Cookie-Value>",
            cookie
          ) +
          "<br/>"
        );
      }, "");
  }
};

export const buildHeaders = (
  selectedCode: RequestExample,
  headers: Record<string, string>[]
) => {
  switch (selectedCode.language) {
    case "NodeJS":
      return `const headers = { ${Object.entries(
        headers.reduce((acc, { key, value }, i) => {
          return i !== 0 ? acc + ", " + key + ": " + value : key + ": " + value;
        }, "")
      )} };`;
    case "cURL":
      return (
        headers.reduce((acc, header) => {
          return (
            acc +
            `${selectedCode.addHeaders
              .replace("<Header-Name>", header.key)
              .replace("<Header-Value>", header.value)} `
          );
        }, "") + "\u005C"
      );
    case "PHP":
      return selectedCode.addHeaders.replace(
        '"<Header-Name>: <Header-Value>"',
        headers.reduce((acc, header, i, arr) => {
          return i !== arr.length - 1
            ? acc + `"${header.key}: ${header.value}", `
            : acc + `"${header.key}: ${header.value}"`;
        }, "")
      );
    case "Python":
      return `headers = { ${headers.reduce((acc, { key, value }, i) => {
        return i !== 0
          ? acc + `, "${key}": "${value}"`
          : `"${key}": "${value}"`;
      }, "")} };`;
    default:
      return headers.reduce((acc, header) => {
        return (
          acc +
          `${selectedCode.addHeaders
            .replace("<Header-Name>", header.key)
            .replace("<Header-Value>", header.value)}<br/>`
        );
      }, "");
  }
};

export default languages;

// Reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

export const httpStatus = {
  // Informational responses
  100: {
    msg: "Continue",
  },
  101: {
    msg: "Switching Protocols",
  },
  102: {
    msg: "Processing",
  },
  103: {
    msg: "Early Hints",
  },
  // Successful responses
  200: {
    msg: "OK",
  },
  201: {
    msg: "Created",
  },
  202: {
    msg: "Accepted",
  },
  203: {
    msg: "Non-Authoritative Information",
  },
  204: {
    msg: "No Content",
  },
  205: {
    msg: "Reset Content",
  },
  206: {
    msg: "Partial Content",
  },
  207: {
    msg: "Multi-Status",
  },
  208: {
    msg: "Already Reported",
  },
  226: {
    msg: "IM Used",
  },
  // Redirection messages
  300: {
    msg: "Multiple Choices",
  },
  301: {
    msg: "Moved Permanently",
  },
  302: {
    msg: "Found",
  },
  303: {
    msg: "See Other",
  },
  304: {
    msg: "Not Modified",
  },
  305: {
    msg: "Use Proxy",
  },
  306: {
    msg: "unused",
  },
  307: {
    msg: "Temporary Redirect",
  },
  308: {
    msg: "Permanent Redirect",
  },
  // Redirection messages
  400: {
    msg: "Bad Request",
  },
  401: {
    msg: "Unauthorized",
  },
  402: {
    msg: "Payment Required",
  },
  403: {
    msg: "Forbidden",
  },
  404: {
    msg: "Not Found",
  },
  405: {
    msg: "Method Not Allowed",
  },
  406: {
    msg: "Not Acceptable",
  },
  407: {
    msg: "Proxy Authentication Required",
  },
  408: {
    msg: "Request Timeout",
  },
  409: {
    msg: "Conflict",
  },
  410: {
    msg: "Gone",
  },
  411: {
    msg: "Length Required",
  },
  412: {
    msg: "Precondition Failed",
  },
  413: {
    msg: "Content Too Large",
  },
  414: {
    msg: "URI Too Long",
  },
  415: {
    msg: "Unsupported Media Type",
  },
  416: {
    msg: "Range Not Satisfiable",
  },
  417: {
    msg: "Expectation Failed",
  },
  418: {
    msg: "I'm a teapot",
  },
  421: {
    msg: "Misdirected Request",
  },
  422: {
    msg: "Unprocessable Content",
  },
  423: {
    msg: "Locked",
  },
  424: {
    msg: "Failed Dependency",
  },
  425: {
    msg: "Too Early",
  },
  426: {
    msg: "Upgrade Required",
  },
  428: {
    msg: "Precondition Required",
  },
  429: {
    msg: "Too Many Requests",
  },
  431: {
    msg: "Request Header Fields Too Large",
  },
  451: {
    msg: "Unavailable For Legal Reasons",
  },
  // Server error responses
  500: {
    msg: "Internal Server Error",
  },
  501: {
    msg: "Not Implemented",
  },
  502: {
    msg: "Bad Gateway",
  },
  503: {
    msg: "Service Unavailable",
  },
  504: {
    msg: "Gateway Timeout",
  },
  505: {
    msg: "HTTP Version Not Supported",
  },
  506: {
    msg: "Variant Also Negotiates",
  },
  507: {
    msg: "Insufficient Storage",
  },
  508: {
    msg: "Loop Detected",
  },
  510: {
    msg: "Not Extended",
  },
  511: {
    msg: "Network Authentication Required",
  },
};

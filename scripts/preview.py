#!/usr/bin/env python3
"""MySect Landing Page - Local Preview Server."""

import argparse
import http.server
import os
import socketserver
import webbrowser
from pathlib import Path

DEFAULT_PORT = 4173
DEFAULT_DIR = "dist" if os.path.exists("dist") else "."


class MySectPreviewHandler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        '.js': 'application/javascript',
        '.mjs': 'application/javascript',
        '.jsx': 'application/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.svg': 'image/svg+xml',
        '.png': 'image/png',
        '.ico': 'image/x-icon',
    }

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()


def run_server(port: int = DEFAULT_PORT, directory: str = DEFAULT_DIR, open_browser: bool = False):
    target_path = Path(directory).resolve()
    if not target_path.exists():
        target_path = Path(".").resolve()
    os.chdir(str(target_path))

    handler = MySectPreviewHandler
    socketserver.TCPServer.allow_reuse_address = True

    with socketserver.TCPServer(("0.0.0.0", port), handler) as httpd:
        url = f"http://localhost:{port}"
        print(f"[+] Preview Server live: {url} serving {target_path}")
        if open_browser:
            webbrowser.open(url)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[+] Preview server stopped.")


def main():
    p = argparse.ArgumentParser(description="MySect Preview Server")
    p.add_argument("--port", "-p", type=int, default=DEFAULT_PORT)
    p.add_argument("--dir", "-d", type=str, default=DEFAULT_DIR)
    p.add_argument("--open", "-o", action="store_true")
    args = p.parse_args()
    run_server(port=args.port, directory=args.dir, open_browser=args.open)


if __name__ == "__main__":
    main()

# =========================================================================================================================================================================================================================================================================

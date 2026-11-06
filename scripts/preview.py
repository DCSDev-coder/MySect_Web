#!/usr/bin/env python3
"""
MySect Landing Page - Production & Static Preview Server
--------------------------------------------------------
A lightweight, zero-dependency HTTP server with enhanced MIME-type
resolution, automatic port detection, CORS headers, and asset caching
controls designed for testing MySect production builds locally.

Usage:
    python scripts/preview.py [--port 8080] [--dir dist] [--open]
"""

import sys
import os
import argparse
import http.server
import socketserver
import webbrowser
import mimetypes
import time
from pathlib import Path


DEFAULT_PORT = 4173
DEFAULT_DIR = "dist" if os.path.exists("dist") else "."


class MySectPreviewHandler(http.server.SimpleHTTPRequestHandler):
    """Custom HTTP request handler with modern web asset support."""

    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        '.js': 'application/javascript',
        '.mjs': 'application/javascript',
        '.jsx': 'application/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.svg': 'image/svg+xml',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.webp': 'image/webp',
        '.ico': 'image/x-icon',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
        '.ttf': 'font/ttf',
    }

    def end_headers(self):
        """Append security, caching, and CORS headers."""
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS, HEAD")
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("X-Content-Type-Options", "nosniff")
        super().end_headers()

    def do_OPTIONS(self):
        """Handle CORS pre-flight requests gracefully."""
        self.send_response(200, "OK")
        self.end_headers()

    def log_message(self, format, *args):
        """Formatted console logging with timestamp."""
        ts = time.strftime("[%Y-%m-%d %H:%M:%S]")
        client_ip = self.client_address[0]
        sys.stdout.write(f"{ts} [{client_ip}] {format % args}\n")
        sys.stdout.flush()


def find_available_port(start_port: int, max_attempts: int = 20) -> int:
    """Find the next available TCP port if default is bound."""
    import socket
    for port in range(start_port, start_port + max_attempts):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(('127.0.0.1', port)) != 0:
                return port
    return start_port


def run_server(port: int = DEFAULT_PORT, directory: str = DEFAULT_DIR, open_browser: bool = False):
    """Initialize and run the preview server indefinitely."""
    target_path = Path(directory).resolve()
    if not target_path.exists():
        print(f"[!] Directory '{directory}' does not exist.")
        if directory == "dist":
            print("    Run 'npm run build' first to generate production assets.")
        target_path = Path(".").resolve()
        print(f"    Falling back to root directory: {target_path}")

    os.chdir(str(target_path))
    actual_port = find_available_port(port)

    handler = MySectPreviewHandler
    socketserver.TCPServer.allow_reuse_address = True

    with socketserver.TCPServer(("0.0.0.0", actual_port), handler) as httpd:
        url = f"http://localhost:{actual_port}"
        print(f"[+] Preview Server live: {url} serving {target_path}")

        if open_browser:
            webbrowser.open(url)

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[+] Preview server stopped cleanly. Goodbye!")


def main():
    parser = argparse.ArgumentParser(
        description="MySect Corporate Landing Page - Preview HTTP Server",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
    )
    parser.add_argument("--port", "-p", type=int, default=DEFAULT_PORT, help="Port to listen on")
    parser.add_argument("--dir", "-d", type=str, default=DEFAULT_DIR, help="Directory to serve")
    parser.add_argument("--open", "-o", action="store_true", help="Open browser automatically")

    args = parser.parse_args()
    run_server(port=args.port, directory=args.dir, open_browser=args.open)


if __name__ == "__main__":
    main()


# =========================================================================================================================================================================================================================================

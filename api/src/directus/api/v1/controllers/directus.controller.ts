import { Controller, All, Req, Res } from '@nestjs/common';
import * as express from 'express';
import fetch from 'node-fetch';

@Controller('directus-proxy')
export class DirectusController {
  private directusBaseUrl =
    process.env.DIRECTUS_BASE_URL || 'http://localhost:8055';

  @All('*')
  async proxy(@Req() req: express.Request, @Res() res: express.Response) {
    const url = `${this.directusBaseUrl}${req.originalUrl.replace(
      'api/directus-proxy/',
      '',
    )}`;
    const method = req.method;
    const headers = { ...req.headers };
    delete headers.host; // Не проксируємо host

    let body;
    if (method !== 'GET' && method !== 'HEAD') {
      body =
        req.body && typeof req.body === 'object'
          ? JSON.stringify(req.body)
          : req.body;
    }

    try {
      const directusRes = await fetch(url, {
        method,
        headers,
        body,
      });

      const contentType = directusRes.headers.get('content-type');
      res.status(directusRes.status);

      if (contentType && contentType.includes('application/json')) {
        const data = await directusRes.json();
        res.json(data);
      } else {
        const text = await directusRes.text();
        res.send(text);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

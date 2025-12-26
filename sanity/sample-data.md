# Sample Data for Sanity CMS

This document provides sample content to populate your Sanity CMS.

## Site Settings

Create one document in `siteSettings`:

```
Title (Japanese): Shichifuku S.L.
Title (Spanish): Shichifuku S.L.
Description (Japanese): スペインを拠点に、国際貿易、不動産、スポーツ事業を展開しています。
Description (Spanish): Con sede en España, operamos en comercio internacional, bienes raíces y proyectos deportivos.
Email: info@shichifuku.com
Phone: +34 XXX XXX XXX
Address (Japanese): スペイン・マルベーリャ
Address (Spanish): Marbella, España
```

## Properties (3 samples)

### Property 1: Lamborghini Villa

```
Title (Japanese): ランボルギーニブランドヴィラ - マルベーリャ
Title (Spanish): Villa Lamborghini - Marbella
Slug: lamborghini-villa-marbella
Price: 5500000
Currency: EUR
Location: Marbella, Spain
Bedrooms: 5
Bathrooms: 6
Area: 650
Description (Japanese): マルベーリャの高級住宅地に位置するランボルギーニブランドヴィラ。最高級の仕上げと設備を備えた、モダンラグジュアリーの傑作です。
Description (Spanish): Villa de marca Lamborghini ubicada en una zona residencial de lujo en Marbella. Una obra maestra de lujo moderno con acabados y equipamiento de primera clase.
Featured: true
```

### Property 2: Beachfront Apartment

```
Title (Japanese): ビーチフロント アパートメント - エステポナ
Title (Spanish): Apartamento Frente al Mar - Estepona
Slug: beachfront-apartment-estepona
Price: 850000
Currency: EUR
Location: Estepona, Spain
Bedrooms: 3
Bathrooms: 3
Area: 180
Description (Japanese): エステポナの美しいビーチフロントに位置する3ベッドルームアパートメント。地中海の息をのむような景色を楽しめます。
Description (Spanish): Apartamento de 3 dormitorios situado en primera línea de playa en Estepona. Disfrute de impresionantes vistas al Mediterráneo.
Featured: true
```

### Property 3: Modern Villa with Pool

```
Title (Japanese): プール付きモダンヴィラ - ミハス
Title (Spanish): Villa Moderna con Piscina - Mijas
Slug: modern-villa-mijas
Price: 1200000
Currency: EUR
Location: Mijas, Spain
Bedrooms: 4
Bathrooms: 4
Area: 380
Description (Japanese): ミハスの静かな住宅地に位置する4ベッドルームヴィラ。プライベートプールと広々としたガーデンを備えています。
Description (Spanish): Villa de 4 dormitorios ubicada en una tranquila zona residencial de Mijas. Cuenta con piscina privada y amplio jardín.
Featured: true
```

## Blog Posts (3 samples)

### Post 1: Trade

```
Title (Japanese): 日本の和牛をヨーロッパ市場へ - 輸出のポイント
Title (Spanish): Wagyu Japonés al Mercado Europeo - Puntos Clave de Exportación
Slug: wagyu-export-europe
Category: trade
Excerpt (Japanese): 日本の高品質な和牛をヨーロッパ市場に輸出する際の規制要件と成功のポイントについて解説します。
Excerpt (Spanish): Explicamos los requisitos regulatorios y puntos clave para exportar wagyu japonés de alta calidad al mercado europeo.
Body: Add detailed content about wagyu export process, regulations, and market opportunities.
```

### Post 2: Real Estate

```
Title (Japanese): マルベーリャ不動産市場 2025年の展望
Title (Spanish): Mercado Inmobiliario de Marbella - Perspectivas 2025
Slug: marbella-real-estate-2025
Category: real-estate
Excerpt (Japanese): マルベーリャの不動産市場の現状と2025年の見通しについて、最新のデータとトレンドを分析します。
Excerpt (Spanish): Analizamos el estado actual del mercado inmobiliario de Marbella y las perspectivas para 2025 con datos y tendencias recientes.
Body: Add detailed content about Marbella real estate market trends and forecasts.
```

### Post 3: Football

```
Title (Japanese): サッカーキャンプが子どもたちにもたらす成長の機会
Title (Spanish): Oportunidades de Crecimiento que los Campamentos de Fútbol Brindan a los Niños
Slug: football-camp-benefits
Category: football
Excerpt (Japanese): サッカーキャンプは技術向上だけでなく、人間的な成長や国際交流の貴重な機会となります。
Excerpt (Spanish): Los campamentos de fútbol no solo mejoran habilidades técnicas, sino que también ofrecen valiosas oportunidades para el crecimiento personal y el intercambio internacional.
Body: Add detailed content about benefits of football camps for youth development.
```

## Projects (1 sample)

### Project 1: Football Camp 2025

```
Title (Japanese): アドルフォ・アルダナ サッカーキャンプ2025
Title (Spanish): Campamento de Fútbol Adolfo Aldana 2025
Slug: aldana-football-camp-2025
Category: football
Description (Japanese): プロサッカー選手アドルフォ・アルダナ氏による直接指導を受けられる貴重な機会。技術だけでなく、スポーツマンシップや国際的な視野を育みます。
Description (Spanish): Una valiosa oportunidad de recibir instrucción directa del futbolista profesional Adolfo Aldana. Más allá de la técnica, se fomenta el espíritu deportivo y la perspectiva internacional.
External Link: https://prtimes.jp/main/html/rd/p/000000006.000157827.html
Featured: true
Body: Add detailed content about the camp, including objectives, schedule, and registration information.
```

## How to Add Content to Sanity

1. Run Sanity Studio locally:
   ```bash
   cd sanity
   npm install
   npx sanity dev
   ```

2. Open http://localhost:3333 in your browser

3. Create documents for each content type using the sample data above

4. Upload placeholder images (you can use free stock photos from Unsplash)

5. Publish all documents

Your website will now display the sample content on all pages.

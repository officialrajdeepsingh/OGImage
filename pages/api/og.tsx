import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    // ?title=<title>&BgColor="blue"
    const hasBgColor = searchParams.has('BgColor');
    // ?title=<title>&BgColor="blue"&color="black"
    const hasColor = searchParams.has('color');

    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Minimal blog';

    const BgColor = hasBgColor
      ? searchParams.get('BgColor')
      : 'lightblue';
    
      const Color = hasColor
      ? searchParams.get('color')
      : 'black';

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: `${BgColor}`,
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              color: `${Color}`,
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 640,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const AmazonConnectChat = () => {
  useEffect(() => {
    const loadAmazonConnect = () => {
      const script = document.createElement('script');
      script.src = 'https://db08fjupg2abb.cloudfront.net/amazon-connect-chat-interface-client.js';
      script.async = true;
      script.id = '969e3d4f-ff54-495c-a755-954629e6b281';
      document.getElementsByTagName('head')[0].appendChild(script);
      window.amazon_connect = window.amazon_connect || function() { (window.amazon_connect.ac = window.amazon_connect.ac || []).push(arguments); };
    };

    loadAmazonConnect();
    window.amazon_connect('styles', { openChat: { color: '#ffffff', backgroundColor: '#123456' }, closeChat: { color: '#ffffff', backgroundColor: '#123456' } });
    window.amazon_connect('snippetId', 'QVFJREFIZ2JTNzdvNlZBdTFZSVJkT0xad3RDb08wM2NZamVYWno2UE4rbHpYL2JuRlFHZXhLY1YzRVdMb05jUjBRYndhSXovQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNRVErUXpLZWllektCVU15SEFnRVFnQ3VlVXkyZWdrS0VCS3BFaXFKMVRkS1VIajRuVXRyMUlTL2luNHJDTDhTSmFkaUVsamFiOFdFcE1NS3E6OmRtVk5mRkdEMTRMb0d2Y3d1elUvV0dEK3lzdkVNQ0FpS05aWUlrL29JZUlPNTlYODRjeDRmQzV3TTczdlpVa0tsWkRUeEx6YXlxdXdWUDFKK1JPTCtDaERjRjMzRElyQmtPY05BZXRaaS82OVRVK0ZxMkFrMWtmbkNpSHcyL0tnMURjZ3pYa1QzRG96NlBoSXNvWW05Qzh3T05GRy9OMD0=');
    window.amazon_connect('supportedMessagingContentTypes', ['text/plain', 'text/markdown']);
  }, []);

  return (
    <>
      <Helmet>
        <script src="https://db08fjupg2abb.cloudfront.net/amazon-connect-chat-interface-client.js" async />
      </Helmet>
      <div>Amazon Connect Chat Interface</div>
    </>
  );
};

export default AmazonConnectChat;
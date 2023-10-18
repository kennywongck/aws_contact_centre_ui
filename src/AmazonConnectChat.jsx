import React, { useEffect } from 'react';

const AmazonConnectChat = () => {
  useEffect(() => {
    const loadAmazonConnect = () => {
      const script = document.createElement('script');
      script.src = 'https://db08fjupg2abb.cloudfront.net/amazon-connect-chat-interface-client.js';
      script.async = true;
//      script.id = 'amazon-connect-script';
      script.id = '969e3d4f-ff54-495c-a755-954629e6b281';
      document.getElementsByTagName('head')[0].appendChild(script);
      window.amazon_connect = window.amazon_connect || function() { (window.amazon_connect.ac = window.amazon_connect.ac || []).push(arguments) };
    };

    loadAmazonConnect();

    window.amazon_connect('styles', { openChat: { color: '#ffffff', backgroundColor: '#123456' }, closeChat: { color: '#ffffff', backgroundColor: '#123456' } });
    window.amazon_connect('snippetId', 'QVFJREFIZ2JTNzdvNlZBdTFZSVJkT0xad3RDb08wM2NZamVYWno2UE4rbHpYL2JuRlFIVDlpV2xhWHJDYTNTWGREbG9jYUo5QUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNVXh3M2twNmdxMUl3c2l3U0FnRVFnQ3MzMGJmMmxrQzVMQkI2REZwN2g1SXdOMHZSazRmQnFwOTltVi83UDBZNWZXNHFoOXdrUmxiN21MNHU6OkVmVFEzeGlMdWQwVG45K21Rc0hweVJBbkpVRzZoSE12OURCMVRrUml0REV3RzhtM1o3bzdBUlVGNHZ2ZGkrSUk1QnFDbllJOFhCNlcrOGF5WlIxY2NRS016Yit6Nlp2MWpLRC9IN08zakNMSStJTXFuNlJMQWwwdVREWk5OeXNvVzVFWU1UOS9LdXBKZ0V2RnNHeTJKdE92R0lrSThsOD0=');
    window.amazon_connect('supportedMessagingContentTypes', ['text/plain', 'text/markdown']);

    return () => {
      const scriptElement = document.getElementById('amazon-connect-script');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []);

  return <div id="amazon-connect-chat"></div>;
};

export default AmazonConnectChat;
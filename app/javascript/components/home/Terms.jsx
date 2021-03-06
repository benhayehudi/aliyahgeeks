import React from 'react';

class Terms extends React.Component {
  componentDidMount() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-116467756-1');
  }
  render() {
    return (
      <div className="contact-container">
        <div id="post-title">
          <h1>Rechov Aliyah Terms of Service</h1>
        </div>
      <div id="privacy-body">
        <b>1. Terms</b>
        <br /><br />
        By accessing the website at http://www.rechovaliyah.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
        <br /><br />
        <b>2. Use License</b>
        <br /><br />
        Permission is granted to temporarily download one copy of the materials (information or software) on Rechov Aliyah's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        modify or copy the materials;
        use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
        attempt to decompile or reverse engineer any software contained on Rechov Aliyah's website;
        remove any copyright or other proprietary notations from the materials; or
        transfer the materials to another person or "mirror" the materials on any other server.
        This license shall automatically terminate if you violate any of these restrictions and may be terminated by Rechov Aliyah at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
        <br /><br />
        <b>3. Disclaimer</b>
        <br /><br />
        The materials on Rechov Aliyah's website are provided on an 'as is' basis. Rechov Aliyah makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        Further, Rechov Aliyah does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
        <br /><br />
        <b>4. Limitations</b>
        <br /><br />
        In no event shall Rechov Aliyah or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Rechov Aliyah's website, even if Rechov Aliyah or a Rechov Aliyah authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
        <br /><br />
        <b>5. Accuracy of materials</b>
        <br /><br />
        The materials appearing on Rechov Aliyah website could include technical, typographical, or photographic errors. Rechov Aliyah does not warrant that any of the materials on its website are accurate, complete or current. Rechov Aliyah may make changes to the materials contained on its website at any time without notice. However Rechov Aliyah does not make any commitment to update the materials.
        <br /><br />
        <b>6. Links</b>
        <br /><br />
        Rechov Aliyah has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Rechov Aliyah of the site. Use of any such linked website is at the user's own risk.
        <br /><br />
        <b>7. Modifications</b>
        <br /><br />
        Rechov Aliyah may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
        <br /><br />
        <b>8. Governing Law</b>
        <br /><br />
        These terms and conditions are governed by and construed in accordance with the laws of New York and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
    </div>
  </div>
    )
  }
}

export default Terms

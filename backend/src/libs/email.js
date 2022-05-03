function getRegistrationEmail(name = '', url = '') {
  return `<table width="100%" cellspacing="0" cellpadding="0">
    <tbody>
      <tr>
        <td width="570">
          <table width="570" cellspacing="0" cellpadding="0" align="center">
            <tbody>
              <tr>
                <td>
                  <div>
                    <h1>Hi ${name}!,</h1>
                    <p>Thank you for signing up for Digital Blue Foam Beta.</p>
                    <p>Click the button below to activate your account and get started:</p>
                    <table width="100%" cellspacing="0" cellpadding="0" align="center">
                      <tbody>
                        <tr>
                          <td align="center">
                            <table border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td align="center">
                                    <a
                                      href=${url}
                                      target="_blank"
                                      rel="noopener"
                                      data-saferedirecturl=${url}
                                      >Activate account</a
                                    >
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      Beta trial will be available until end-June 2020. We are happy to set up a 15-minute video tutorial
                      for you in this month. Please&nbsp;<a
                        href="mailto:hello@digitalbluefoam.com"
                        target="_blank"
                        rel="noopener"
                        >email us</a
                      >&nbsp;to schedule a time based on your availability.
                    </p>
                    <p>
                      <strong>We would love to hear your feedback.</strong>&nbsp;Please spare a few minutes to share your
                      thoughts with us using&nbsp;<a
                        href="https://forms.gle/n8vysNW3soUUKn35A"
                        target="_blank"
                        rel="noopener"
                        data-saferedirecturl="https://www.google.com/url?q=https://forms.gle/n8vysNW3soUUKn35A&amp;source=gmail&amp;ust=1597990453041000&amp;usg=AFQjCNHdz7pJ567SLqUhosmWwPcQZ6hn1w"
                        >this form</a
                      >&nbsp;or by replying to this message.
                    </p>
                    <p>Welcome aboard,<br />The Digital Blue Foam Team</p>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <p>
                              If you&rsquo;re having trouble with the button above, copy and paste the URL below into your
                              web browser.
                            </p>
                            <p>
                              <a
                                href=${url}
                                target="_blank"
                                rel="noopener"
                                data-saferedirecturl=${url}
                                >${url}</a
                              >
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table width="570" cellspacing="0" cellpadding="0" align="center">
            <tbody>
              <tr>
                <td align="center">
                  <p>&copy; 2019-20 Digital Blue Foam. All rights reserved.</p>
                  <p>Digital Blue Foam<br />2 Alexandra Rd, #02-06 Delta House,<br />Singapore 159919</p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>`;
}

function getForgotPasswordEmail(name = '', url = '') {
  return `<table width="100%" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td width="570">
        <table width="570" cellspacing="0" cellpadding="0" align="center">
          <tbody>
            <tr>
              <td>
                <div>
                  <h1>Hi ${name}!,</h1>
                  <p>
                    Click the button below to reset your digital blue foam password. Below link will be expired exactly
                    after <strong>1 week</strong> from the time it was created.
                  </p>

                  <table width="100%" cellspacing="0" cellpadding="0" align="center">
                    <tbody>
                      <tr>
                        <td align="center">
                          <table border="0" width="100%" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td align="center">
                                  <a href="${url}" target="_blank" rel="noopener" data-saferedirecturl="${url}"
                                    >RESET PASSWORD</a
                                  >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>The Digital Blue Foam Team</p>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            If you&rsquo;re having trouble with the button above, copy and paste the URL below into your
                            web browser.
                          </p>
                          <p>
                            <a href="${url}" target="_blank" rel="noopener" data-saferedirecturl="${url}">${url}</a>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <table width="570" cellspacing="0" cellpadding="0" align="center">
          <tbody>
            <tr>
              <td align="center">
                <p>&copy; 2019-20 Digital Blue Foam. All rights reserved.</p>
                <p>Digital Blue Foam<br />2 Alexandra Rd, #02-06 Delta House,<br />Singapore 159919</p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`;
}

module.exports = {
  getRegistrationEmail,
  getForgotPasswordEmail,
};

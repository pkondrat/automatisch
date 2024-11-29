import { URLSearchParams } from 'url';
import authScope from '../common/auth-scope.js';

export default async function generateAuthUrl($) {
  const oauthRedirectUrlField = $.app.auth.fields.find(
    (field) => field.key == 'oAuthRedirectUrl'
  );
  const redirectUri = "https://automatisch.pkondratowicz.pl/app/google-tasks/connections/add";
  const searchParams = new URLSearchParams({
    client_id: $.auth.data.clientId,
    redirect_uri: redirectUri,
    prompt: 'select_account',
    scope: authScope.join(' '),
    response_type: 'code',
    access_type: 'offline',
  });

  const url = `https://accounts.google.com/o/oauth2/v2/auth?${searchParams.toString()}`;

  await $.auth.set({
    url,
  });
}

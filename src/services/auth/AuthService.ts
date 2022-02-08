export interface AuthServiceProps {
  clientId: string
  clientSecret?: string
  contentType?: string
  location: Location
  provider: string
  authorizeEndpoint?: string
  tokenEndpoint?: string
  logoutEndpoint?: string
  audience?: string
  redirectUri?: string
  scopes: string[]
  autoRefresh?: boolean
  refreshSlack?: number
}


export class AuthService {
  props: AuthServiceProps;

  constructor(props: AuthServiceProps) {
    this.props = props;
  }

  login() {
    console.log('Мы Начинаем авторизацию');
  }

}
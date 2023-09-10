import {
  ProfileContent,
  ProfileInfo,
  ProfileHeader,
  ProfileInfoFooter,
  TextContent,
} from './style'
import { GithubLogo, Buildings, Users } from 'phosphor-react'
import Avatar from '../../../../assets/avatar.svg'

export function Profile() {
  return (
    <ProfileContent>
      <div>
        <img src={Avatar} alt="" />
      </div>
      <ProfileInfo>
        <TextContent>
          <ProfileHeader>
            <h2>Cameron Williamson</h2>
          </ProfileHeader>
          <div>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </div>
        </TextContent>
        <ProfileInfoFooter>
          <div>
            <GithubLogo />
            <p>yurisanclet</p>
          </div>
          <div>
            <Buildings />
            <p>rocketesat</p>
          </div>
          <div>
            <Users />
            <p>32 seguidores</p>
          </div>
        </ProfileInfoFooter>
      </ProfileInfo>
    </ProfileContent>
  )
}

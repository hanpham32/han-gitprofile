import { MdLocationOn, MdMail } from 'react-icons/md';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMediumSquare,
  AiFillMessage,
} from 'react-icons/ai';
import { SiTwitter, SiSubstack } from 'react-icons/si';
import { GrLinkedinOption } from 'react-icons/gr';
import { GiMirrorMirror } from 'react-icons/gi';
import { CgDribbble } from 'react-icons/cg';
import { RiPhoneFill } from 'react-icons/ri';
import { Fragment } from 'react';
import {
  FaBehanceSquare,
  FaBuilding,
  FaDev,
  FaFacebook,
  FaGlobe,
  FaGoodreadsG,
  FaTelegram,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';

const ListItem = ({ icon, title, value, link, skeleton = false }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex justify-start py-2 px-1 items-center"
    >
      <span className="w-2 m-2">{icon}</span>
      <div className="flex-grow font-medium px-2">{title}</div>
      <div
        className={`${
          skeleton ? 'flex-grow' : ''
        } text-sm font-normal text-right mr-2 ml-3 ${link ? 'truncate' : ''}`}
      >
        <div
          style={{
            wordBreak: 'break-word',
          }}
        >
          {value}
        </div>
      </div>
    </a>
  );
};

const isCompanyMention = (company) => {
  return company.startsWith('@') && !company.includes(' ');
};

const companyLink = (company) => {
  return `https://github.com/${company.substring(1)}`;
};

const Details = ({ profile, loading, social, github }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <ListItem
          key={index}
          skeleton={true}
          icon={skeleton({ width: 'w-4', height: 'h-4' })}
          title={skeleton({ width: 'w-24', height: 'h-4' })}
          value={skeleton({ width: 'w-full', height: 'h-4' })}
        />
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="text-base-content text-opacity-60">
          {loading || !profile ? (
            renderSkeleton()
          ) : (
            <Fragment>
              {profile.location && (
                <ListItem
                  icon={<MdLocationOn className="mr-2" />}
                  title="Based in:"
                  value={profile.location}
                />
              )}
              {profile.company && (
                <ListItem
                  icon={<FaBuilding className="mr-2" />}
                  title="Company:"
                  value={profile.company}
                  link={
                    isCompanyMention(profile.company.trim())
                      ? companyLink(profile.company.trim())
                      : null
                  }
                />
              )}
              <ListItem
                icon={<AiFillGithub className="mr-2" />}
                title="GitHub:"
                value={github.username}
                link={`https://github.com/${github.username}`}
              />
              {social?.twitter && (
                <ListItem
                  icon={<SiTwitter className="mr-2" />}
                  title="Twitter:"
                  value={social.twitter}
                  link={`https://twitter.com/${social.twitter}`}
                />
              )}
              {social?.substack && (
                <ListItem
                  icon={<SiSubstack className="mr-2" />}
                  title="Substack:"
                  value={social.substack}
                  link={`https://${social.substack}.substack.com/`}
                />
              )}
              {social?.medium && (
                <ListItem
                  icon={<AiFillMediumSquare className="mr-2" />}
                  title="Medium:"
                  value={social.medium}
                  link={`https://medium.com/@${social.medium}`}
                />
              )}
              {social?.linkedin && (
                <ListItem
                  icon={<GrLinkedinOption className="mr-2" />}
                  title="LinkedIn:"
                  value={social.linkedin}
                  link={`https://www.linkedin.com/in/${social.linkedin}`}
                />
              )}
              {social?.goodreads && (
                <ListItem
                  icon={<FaGoodreadsG className="mr-2" />}
                  title="Goodreads:"
                  value={social.goodreads}
                  link={`https://www.goodreads.com/${social.goodreads}`}
                />
              )}
              {social?.telegram && (
                <ListItem
                  icon={<FaTelegram className="mr-2" />}
                  title="Telegram:"
                  value={social.telegram}
                  link={social.telegram}
                />
              )}
              {social?.mirror && (
                <ListItem
                  icon={<GiMirrorMirror className="mr-2" />}
                  title="MirrorXYZ:"
                  value={social.mirror}
                  link={`https://mirror.xyz/${social.mirror}`}
                />
              )}
              {social?.dribbble && (
                <ListItem
                  icon={<CgDribbble className="mr-2" />}
                  title="Dribbble:"
                  value={social.dribbble}
                  link={`https://dribbble.com/${social.dribbble}`}
                />
              )}
              {social?.behance && (
                <ListItem
                  icon={<FaBehanceSquare className="mr-2" />}
                  title="Behance:"
                  value={social.behance}
                  link={`https://www.behance.net/${social.behance}`}
                />
              )}
              {social?.facebook && (
                <ListItem
                  icon={<FaFacebook className="mr-2" />}
                  title="Facebook:"
                  value={social.facebook}
                  link={`https://www.facebook.com/${social.facebook}`}
                />
              )}
              {social?.instagram && (
                <ListItem
                  icon={<AiFillInstagram className="mr-2" />}
                  title="Instagram:"
                  value={social.instagram}
                  link={`https://www.instagram.com/${social.instagram}`}
                />
              )}
              {social?.dev && (
                <ListItem
                  icon={<FaDev className="mr-2" />}
                  title="Dev:"
                  value={social.dev}
                  link={`https://dev.to/${social.dev}`}
                />
              )}
              {social?.website && (
                <ListItem
                  icon={<FaGlobe className="mr-2" />}
                  title="Website:"
                  value={social.website}
                  link={social.website}
                />
              )}
              {social?.phone && (
                <ListItem
                  icon={<RiPhoneFill className="mr-2" />}
                  title="Phone:"
                  value={social.phone}
                  link={`tel:${social.phone}`}
                />
              )}
              {social?.email && (
                <ListItem
                  icon={<MdMail className="mr-2" />}
                  title="Email:"
                  value={social.email}
                  link={`mailto:${social.email}`}
                />
              )}
              {social?.calendly && (
                <ListItem
                  icon={<AiFillMessage className="mr-2" />}
                  title="Calendly"
                  value={social.calendly}
                  link={`https://calendly.com/${social.calendly}/`}
                />
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  social: PropTypes.object.isRequired,
  github: PropTypes.object.isRequired,
};

ListItem.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.node,
  value: PropTypes.node,
  link: PropTypes.string,
  skeleton: PropTypes.bool,
};

export default Details;

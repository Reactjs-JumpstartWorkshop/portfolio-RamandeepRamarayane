

function Subjects(){
  return (
    <div className="space">
      <h2 className="section-title">Subjects of Interest</h2>
      <div class="row row-pad">
        <div class="col-4 padd">
          <div class="list-group" id="list-tab" role="tablist">
            <a
              class="list-group-item list-group-item-action active"
              id="list-home-list"
              data-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="home"
            >
              Web Development
            </a>
            <a
              class="list-group-item list-group-item-action"
              id="list-profile-list"
              data-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="profile"
            >
              Psychology
            </a>
            <a
              class="list-group-item list-group-item-action"
              id="list-messages-list"
              data-toggle="list"
              href="#list-messages"
              role="tab"
              aria-controls="messages"
            >
              Digital Marketing
            </a>
            <a
              class="list-group-item list-group-item-action"
              id="list-settings-list"
              data-toggle="list"
              href="#list-settings"
              role="tab"
              aria-controls="settings"
            >
              Nanotechnology
            </a>
          </div>
        </div>
        <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              Web development is the work involved in developing a Web site for
              the Internet or an intranet. Web development can range from
              developing a simple single static page of plain text to complex
              Web-based Internet applications, electronic businesses, and social
              network services
            </div>
            <div
              class="tab-pane fade"
              id="list-profile"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
              Psychology is the science of mind and behavior. Psychology
              includes the study of conscious and unconscious phenomena, as well
              as feeling and thought. It is an academic discipline of immense
              scope
            </div>
            <div
              class="tab-pane fade"
              id="list-messages"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
              At a high level, digital marketing refers to advertising delivered
              through digital channels such as search engines, websites, social
              media, email, and mobile apps. Using these online media channels,
              digital marketing is the method by which companies endorse goods,
              services, and brands. Consumers heavily rely on digital means to
              research products
            </div>
            <div
              class="tab-pane fade"
              id="list-settings"
              role="tabpanel"
              aria-labelledby="list-settings-list"
            >
              Nanotechnology is a field of research and innovation concerned
              with building 'things' - generally, materials and devices - on the
              scale of atoms and molecules. A nanometre is one-billionth of a
              metre: ten times the diameter of a hydrogen atom.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subjects;
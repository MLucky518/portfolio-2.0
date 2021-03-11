import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function MyModal() {
    const [open, setOpen] = React.useState(false);

    return (
        <Modal
            className="modal"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<a>Contact</a>}
            dimmer="blurring"
        >
            <Modal.Header>Contact Me</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>
                        We've found the following gravatar image associated with
                        your e-mail address.
                    </p>
                    <p>Is it okay to use this photo?</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color="violet" onClick={() => setOpen(false)}>
                    Close
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default MyModal;

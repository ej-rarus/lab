function Modal() {
    let modaltitle = '모달창';
    let modalcontent = '내용입니다요';
    return (
        <div className="Modal-wrapper">
            <div className="Modal-title">{modaltitle}</div>
            <div className="Modal-content">{modalcontent}</div>
        </div>
    )
}

export default Modal;
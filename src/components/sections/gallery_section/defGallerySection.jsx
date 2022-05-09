import Isotope from 'isotope-layout';
import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import GalleryImg1 from '../../../assets/img/gallery/aden-lao-bHaDK74hWLY-unsplash.jpg';
import GalleryImg2 from '../../../assets/img/gallery/daniel-sessler-t0jqUGB9bd8-unsplash.jpg';
import GalleryImg3 from '../../../assets/img/gallery/dipanjan-pal-CbXmfl2t_SQ-unsplash.jpg';
import GalleryStyle from './defGalleySection.module.css';

function DefGallerySection() {
    const isotope = useRef();

    const [filterKey, setFilterKey] = useState('*');

    useEffect(() => {
        isotope.current = new Isotope('.galleryContainerIso', {
            itemSelector: '.galleryItemIso',
        });

        return () => isotope.current.destroy();
    }, []);

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        filterKey === '*'
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` });
    }, [filterKey]);

    const handleFilterKeyChange = (key) => () => setFilterKey(key);

    return (
        <section id="gallery" className={`${GalleryStyle.gallery} py-5`}>
            <Container fluid="xl">
                <div className="d-flex flex-column align-items-center text-center py-5">
                    <div className="title">Lorem, ipsum.</div>

                    <div className="hLine" />

                    <div className="subtitle display-4">Lorem ipsum dolor sit amet.</div>

                    <div className="summery">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit,
                        iusto!
                    </div>
                </div>

                <div>
                    <div className="d-flex justify-content-center pb-5">
                        <Button
                            variant="dark"
                            className="py-2 px-3 me-4 title"
                            onClick={handleFilterKeyChange('*')}
                        >
                            All
                        </Button>

                        <Button
                            variant="dark"
                            className="py-2 px-3 me-4 title"
                            onClick={handleFilterKeyChange('filterLorem')}
                        >
                            Lorem.
                        </Button>
                        <Button
                            variant="dark"
                            className="py-2 px-3 me-4 title"
                            onClick={handleFilterKeyChange('filterIpsum')}
                        >
                            Ipsum.
                        </Button>
                        <Button
                            variant="dark"
                            className="py-2 px-3 me-4 title"
                            onClick={handleFilterKeyChange('filterDlor')}
                        >
                            Dlor.
                        </Button>
                    </div>

                    <Row className={`${GalleryStyle.galleryContainer} galleryContainerIso`}>
                        <Col
                            md={6}
                            lg={4}
                            className={`${GalleryStyle.galleryItem} galleryItemIso filterLorem p-3`}
                        >
                            <Image
                                fluid
                                src={`${GalleryImg1}`}
                                className={`${GalleryStyle.galleryItemImg}`}
                            />

                            <div
                                className={`${GalleryStyle.galleryItemInfo} position-relative justify-content-between align-items-center p-3`}
                            >
                                <div>
                                    <div className="title">Lorem.</div>
                                    <div className={`${GalleryStyle.description}`}>
                                        Lorem, ipsum.
                                    </div>
                                </div>
                                <div>
                                    <a href="##">
                                        <i className="bx bx-expand-alt" />
                                    </a>
                                    <a href="##">
                                        <i className="bx bx-link-external" />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col
                            md={6}
                            lg={4}
                            className={`${GalleryStyle.galleryItem} galleryItemIso filterIpsum p-3`}
                        >
                            <Image
                                fluid
                                src={`${GalleryImg2}`}
                                className={`${GalleryStyle.galleryItemImg}`}
                            />

                            <div
                                className={`${GalleryStyle.galleryItemInfo} position-relative justify-content-between align-items-center p-3`}
                            >
                                <div>
                                    <div className="title">Ipsum.</div>
                                    <div className={`${GalleryStyle.description}`}>
                                        Lorem, ipsum.
                                    </div>
                                </div>
                                <div>
                                    <a href="##">
                                        <i className="bx bx-expand-alt" />
                                    </a>
                                    <a href="##">
                                        <i className="bx bx-link-external" />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col
                            md={6}
                            lg={4}
                            className={`${GalleryStyle.galleryItem} galleryItemIso filterDlor p-3`}
                        >
                            <Image
                                fluid
                                src={`${GalleryImg3}`}
                                className={`${GalleryStyle.galleryItemImg}`}
                            />

                            <div
                                className={`${GalleryStyle.galleryItemInfo} position-relative justify-content-between align-items-center p-3`}
                            >
                                <div>
                                    <div className="title">Dlor.</div>
                                    <div className={`${GalleryStyle.description}`}>
                                        Lorem, ipsum.
                                    </div>
                                </div>
                                <div>
                                    <a href="##">
                                        <i className="bx bx-expand-alt" />
                                    </a>
                                    <a href="##">
                                        <i className="bx bx-link-external" />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default DefGallerySection;

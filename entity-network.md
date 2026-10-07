---
title: "Entity network: Luke F. Walton"
url: "https://lukefwalton.com/about/"
recordKind: entity-network
source: source-of-truth/entity-network.json
---

# Entity network: Luke F. Walton

**Scoobert Doobert is Luke F. Walton's primary music project.**

Every shared identifier in the Luke F. Walton network of sites: the person, his music projects, the organizations and places around them, the works, and the fiction. The registry rows are in entity-network.json and the graph the canonical site emits is in entity-network.jsonld.

## Rules

- Luke F. Walton is the Person (https://lukefwalton.com/#person), credited on songwriting and production as Luke Francis Walton.
- Scoobert Doobert is Luke F. Walton's primary music project. Scoobert Doobert (https://lukefwalton.com/#scoobert) is a MusicGroup he founded in 2017 and owns, including its masters. It is a project, never an alias, alternateName or sameAs of the person; the project's service identifiers live on the project node only.
- FEiN is a duo: Luke F. Walton and Brandon Woodward.
- Love Music More is co-owned by Luke F. Walton and Beformer, and produced by Beformer. Beformer is the label and artist-services partner of Scoobert Doobert and owns none of it.
- Fiction entities carry the status FICTIONAL CANON. Each has named creators and a parent work, and a Wikidata additionalType that marks it as fictional (Q15632617, fictional human; Q14897293, fictional entity). A character may be typed Person inside its story; it is never a Person node for a real person.
- A planned work carries a creativeWorkStatus, never a release date.
- This export leaves out the operational parts of the private registry (which repository declares each entity, the repository list, forbidden phrases, staging notes) and entries that are not live.

## Entities

| Key | Name | @id | Types | Status | Parent | Creators | additionalType |
| --- | --- | --- | --- | --- | --- | --- | --- |
| person | Luke F. Walton | https://lukefwalton.com/#person | Person | FACT |  |  |  |
| scoobert | Scoobert Doobert | https://lukefwalton.com/#scoobert | MusicGroup | FACT |  |  |  |
| fein | FEiN | https://lukefwalton.com/#fein | MusicGroup | FACT |  |  |  |
| brandon-woodward | Brandon Woodward | https://lukefwalton.com/#brandon-woodward | Person | FACT |  |  |  |
| tiny-giant | Tiny Giant Recording | https://tinygiantrecording.com/#organization | Organization, LocalBusiness | FACT |  |  |  |
| micasa | Micasa Studios | https://micasarecording.com/#studio | Organization, Place | FACT |  |  |  |
| beformer | Beformer | https://lukefwalton.com/#beformer | Organization | FACT |  |  |  |
| indiemono | indiemono | https://lukefwalton.com/#indiemono | Organization | FACT |  |  |  |
| apology-audiobook | Apology by Plato (audiobook) | https://lukefwalton.com/#apology-audiobook | Audiobook | FACT |  |  |  |
| lovemusicmore | Love Music More | https://lukefwalton.com/#lovemusicmore | CreativeWorkSeries | FACT |  |  |  |
| lovemusicmore-podcast | Love Music More (podcast) | https://lukefwalton.com/#lovemusicmore-podcast | PodcastSeries | FACT |  |  |  |
| lovemusicmore-blog | Love Music More (newsletter) | https://lukefwalton.com/#lovemusicmore-blog | Blog | FACT |  |  |  |
| surmado | Surmado | https://www.surmado.com#organization | Organization | FACT |  |  |  |
| the-signatories | The Signatories | https://lukefwalton.com/#the-signatories | Book | FACT |  |  |  |
| jonathan-gillie | Jonathan Gillie | https://signatoriesnovel.com/#jonathan-gillie | Person | FACT |  |  |  |
| cawleen | cawleen | https://cawleen.com/#cawleen | Person | FICTIONAL CANON | The Signatories | Luke F. Walton, Jonathan Gillie | fictional human (Q15632617) |
| outhere | OUTHERE | https://outhere.london/#outhere | MusicVenue | FICTIONAL CANON | The Signatories | Luke F. Walton, Jonathan Gillie | fictional entity (Q14897293) |
| when-gods-meet | When Gods Meet | https://whengodsmeet.com/#work | CreativeWork | FACT |  |  |  |
| bar-spaniels | Bar Spaniel's | https://barspaniels.com/#bar | BarOrPub | FICTIONAL CANON | When Gods Meet | Luke F. Walton | fictional entity (Q14897293) |
| burt-cashman | Burt Cashman | https://burtcashman.com/#burt-cashman | Person | FICTIONAL CANON | MÖBIUS | Luke F. Walton | fictional human (Q15632617) |
| mobius-cycle | The MÖBIUS cycle | https://lukefwalton.com/albums/mobius-cycle/#cycle | CreativeWorkSeries | FACT |  |  |  |
| mobius | MÖBIUS | https://lukefwalton.com/albums/mobius/#album | MusicAlbum | PLANNED WORK |  |  |  |
| lukewaltonband | The Luke Walton Band | https://lukefwalton.com/#lukewaltonband | MusicGroup | HISTORICAL |  |  |  |
| existelsewhere | Exist Elsewhere | https://lukefwalton.com/#existelsewhere | MusicGroup | HISTORICAL |  |  |  |
| burritobot | Burrito Bot | https://lukefwalton.com/#burritobot | MusicGroup | HISTORICAL |  |  |  |
| accidentalmuse | Accidental Muse | https://lukefwalton.com/#accidentalmuse | MusicGroup | HISTORICAL |  |  |  |
| blue-suburbia | Blue Suburbia | https://lukefwalton.com/with/blue-suburbia/#artist | MusicGroup | HISTORICAL |  |  |  |
| mannequin | Mannequin | https://lukefwalton.com/#mannequin | MusicGroup | HISTORICAL |  |  |  |
| checkpointsix | Checkpoint Six | https://lukefwalton.com/#checkpointsix | MusicGroup | HISTORICAL |  |  |  |

## Fictional websites

| Host | Canonical URL | Entity @id | Type | Creators | Parent work |
| --- | --- | --- | --- | --- | --- |
| barspaniels.com | https://barspaniels.com/ | https://barspaniels.com/#bar | BarOrPub | Luke F. Walton | When Gods Meet |
| cawleen.com | https://cawleen.com/ | https://cawleen.com/#cawleen | Person | Luke F. Walton, Jonathan Gillie | The Signatories |
| outhere.london | https://outhere.london/ | https://outhere.london/#outhere | MusicVenue | Luke F. Walton, Jonathan Gillie | The Signatories |
| burtcashman.com | https://burtcashman.com/ | https://burtcashman.com/#burt-cashman | Person | Luke F. Walton | MÖBIUS |

Canonical site: https://lukefwalton.com/. Files: entity-network.json, entity-network.jsonld.

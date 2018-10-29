import {Component, OnInit} from '@angular/core';
import {Mapbox, MapboxMarker} from "nativescript-mapbox";

@Component({
    moduleId: module.id,
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
    private mapbox: Mapbox;

    constructor() {
    }

    ngOnInit() {
    }

    onMapReady({map}) {
        this.mapbox = map;
        const firstMarker = <MapboxMarker>{ //cast as a MapboxMarker to pick up helper functions such as update()
            id: 2, // can be user in 'removeMarkers()'
            lat: 52.3602160, // mandatory
            lng: 4.8891680, // mandatory
            title: 'One-line title here', // no popup unless set
            subtitle: 'Infamous subtitle!',
            selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };
        this.mapbox.setViewport(
            {
                bounds: {
                    north: 52.4820,
                    east: 5.1087,
                    south: 52.2581,
                    west: 4.6816
                },
                animated: true
            }
        );
        this.mapbox.addMarkers([firstMarker]);
    }
}
